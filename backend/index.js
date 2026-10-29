require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Models
const User = require("./model/UserModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// Supabase
const supabase = require("./supabaseClient");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// Serverless-safe MongoDB Connection Caching
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri)
      .then((mongooseInstance) => {
        console.log("DB Connected");
        return mongooseInstance;
      })
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const app = express();

app.use(async (req, res, next) => {
  try {
    await dbConnect();
    next();
  } catch (error) {
    console.error("DB Connection Error:", error);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      process.env.FRONTEND_URL,
      process.env.DASHBOARD_URL,
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }),
);

app.use(bodyParser.json());
app.use(cookieParser());

// AUTH: SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    try {
      const { error: userErr } = await supabase.from("users").insert([
        {
          mongo_id: user._id.toString(),
          email: user.email,
          username: user.username,
          created_at: user.createdAt
            ? user.createdAt.toISOString()
            : new Date().toISOString(),
        },
      ]);
      if (userErr) console.error("Supabase user insert error:", userErr.message);
    } catch (e) {
      console.error("Supabase user sync failed:", e.message);
    }

    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
    });
    res.status(201).json({ message: "Signed in successfully", success: true, token: token });
  } catch (error) {
    console.error(error);
  }
});

// AUTH: LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect email or password" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect email or password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.cookie("token", token, {
      httpOnly: false,
      secure: false,
      sameSite: "lax",
    });
    res.status(201).json({ message: "User logged in", success: true, token: token });
  } catch (error) {
    console.error(error);
  }
});

// AUTH: LOGOUT
app.post("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    secure: false,
    sameSite: "lax",
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out successfully", success: true });
});

// VERIFY USER
app.post("/", (req, res) => {
  const token = req.body.token || req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user)
        return res.json({
          status: true,
          user: user.username,
          email: user.email,
        });
      else return res.json({ status: false });
    }
  });
});

// DATA ROUTES: USER-SPECIFIC HOLDINGS
app.get("/allHoldings", async (req, res) => {
  const userEmail = req.query.userEmail;
  let allHoldings;
  if (userEmail) {
    // Agar user ka email mila, toh us user ke stocks + default seed stocks dikhao
    allHoldings = await HoldingsModel.find({
      $or: [{ userEmail: userEmail }, { userEmail: "general" }, { userEmail: { $exists: false } }]
    });
  } else {
    allHoldings = await HoldingsModel.find({});
  }
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// DATA ROUTES: ALL ORDERS (USER-WISE)
app.get("/allOrders", async (req, res) => {
  const userEmail = req.query.userEmail;
  const filter = userEmail ? { userEmail: userEmail } : {};
  let allOrders = await OrdersModel.find(filter).sort({ createdAt: -1 });
  res.json(allOrders);
});

// DATA ROUTES: USER-SPECIFIC NEW ORDER
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode, userEmail } = req.body;
  const email = userEmail || "general";

  // 1. Save order with userEmail in MongoDB
  const newOrder = new OrdersModel({
    name: name,
    qty: qty,
    price: price,
    mode: mode,
    userEmail: email,
  });
  await newOrder.save();
  console.log(`✅ Order saved for user [${email}]: ${mode} ${qty}x ${name}`);

  // 2. Mirror order to Supabase
  try {
    const { error: orderErr } = await supabase.from("orders").insert([
      {
        name: name,
        qty: Number(qty),
        price: Number(price),
        mode: mode,
        user_email: email,
        created_at: new Date().toISOString(),
      },
    ]);
    if (orderErr) console.error("Supabase order insert error:", orderErr.message);
  } catch (e) {
    console.error("Supabase order sync failed:", e.message);
  }

  // 3. Update or Insert Holding FOR THIS SPECIFIC USER
  let existingHolding = await HoldingsModel.findOne({ name: name, userEmail: email });

  if (mode === "BUY") {
    if (existingHolding) {
      existingHolding.qty = parseInt(existingHolding.qty) + parseInt(qty);
      await existingHolding.save();
      res.send("Buy Order placed. User quantity updated!");
    } else {
      const newHolding = new HoldingsModel({
        name: name,
        qty: qty,
        price: price,
        avg: price,
        net: "+0%",
        day: "+0%",
        userEmail: email,
      });
      await newHolding.save();
      res.send("Buy Order placed. New User Holding created!");
    }
  } else if (mode === "SELL") {
    if (existingHolding) {
      const sellQty = parseInt(qty);
      const currentQty = parseInt(existingHolding.qty);
      if (currentQty > sellQty) {
        existingHolding.qty = currentQty - sellQty;
        await existingHolding.save();
        res.send("Sell Order placed. Quantity reduced!");
      } else if (currentQty === sellQty) {
        await HoldingsModel.deleteOne({ name: name, userEmail: email });
        res.send("Sell Order placed. Holding sold out!");
      } else {
        res.status(400).send("Error: You are trying to sell more than you own!");
      }
    } else {
      res.status(404).send("Error: You don't own this stock!");
    }
  } else {
    res.send("Order saved (No holding update)");
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("App started on port " + PORT);
    dbConnect();
  });
}

module.exports = app;