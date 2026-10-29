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

const app = express();

// 1. CORS MUST BE FIRST (so preflight OPTIONS requests pass instantly)
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      process.env.FRONTEND_URL,
      process.env.DASHBOARD_URL,
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

// 2. Serverless-safe MongoDB Connection Caching
let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, {
      bufferCommands: false,
    }).then((mongooseInstance) => {
      console.log("DB Connected");
      return mongooseInstance;
    }).catch((error) => {
      cached.promise = null;
      throw error;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// 3. Database middleware applied cleanly (skips OPTIONS requests)
app.use(async (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    await dbConnect();
    next();
  } catch (error) {
    console.error("DB Connection Error:", error);
    return res.status(500).json({ error: "Database connection failed" });
  }
});

// AUTH: SIGNUP
app.post("/signup", async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, username });
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    try {
      await supabase.from("users").insert([
        {
          mongo_id: user._id.toString(),
          email: user.email,
          username: user.username,
          created_at: new Date().toISOString(),
        },
      ]);
    } catch (e) {
      console.error("Supabase user sync failed:", e.message);
    }

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,   // Required for cross-site Vercel domains
      sameSite: "none", // Required for cross-site Vercel domains
    });
    
    return res.status(201).json({ message: "Signed up successfully", success: true, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
});

// AUTH: LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password", success: false });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password", success: false });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    
    return res.status(200).json({ message: "User logged in", success: true, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
});

// AUTH: LOGOUT
app.post("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    expires: new Date(0),
  });
  return res.status(200).json({ message: "User logged out successfully", success: true });
});

// VERIFY USER
app.post("/", async (req, res) => {
  const token = req.body.token || req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res.json({
          status: true,
          user: user.username,
          email: user.email,
        });
      } else {
        return res.json({ status: false });
      }
    }
  });
});

// DATA ROUTES: USER-SPECIFIC HOLDINGS
app.get("/allHoldings", async (req, res) => {
  const userEmail = req.query.userEmail;
  let allHoldings;
  if (userEmail) {
    allHoldings = await HoldingsModel.find({
      $or: [{ userEmail: userEmail }, { userEmail: "general" }, { userEmail: { $exists: false } }]
    });
  } else {
    allHoldings = await HoldingsModel.find({});
  }
  return res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  return res.json(allPositions);
});

// DATA ROUTES: ALL ORDERS (USER-WISE)
app.get("/allOrders", async (req, res) => {
  const userEmail = req.query.userEmail;
  const filter = userEmail ? { userEmail: userEmail } : {};
  let allOrders = await OrdersModel.find(filter).sort({ createdAt: -1 });
  return res.json(allOrders);
});

// DATA ROUTES: USER-SPECIFIC NEW ORDER
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode, userEmail } = req.body;
  const email = userEmail || "general";

  const newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode,
    userEmail: email,
  });
  await newOrder.save();

  try {
    await supabase.from("orders").insert([
      {
        name,
        qty: Number(qty),
        price: Number(price),
        mode,
        user_email: email,
        created_at: new Date().toISOString(),
      },
    ]);
  } catch (e) {
    console.error("Supabase order sync failed:", e.message);
  }

  let existingHolding = await HoldingsModel.findOne({ name, userEmail: email });

  if (mode === "BUY") {
    if (existingHolding) {
      existingHolding.qty = parseInt(existingHolding.qty) + parseInt(qty);
      await existingHolding.save();
      return res.send("Buy Order placed. User quantity updated!");
    } else {
      const newHolding = new HoldingsModel({
        name,
        qty,
        price,
        avg: price,
        net: "+0%",
        day: "+0%",
        userEmail: email,
      });
      await newHolding.save();
      return res.send("Buy Order placed. New User Holding created!");
    }
  } else if (mode === "SELL") {
    if (existingHolding) {
      const sellQty = parseInt(qty);
      const currentQty = parseInt(existingHolding.qty);
      if (currentQty > sellQty) {
        existingHolding.qty = currentQty - sellQty;
        await existingHolding.save();
        return res.send("Sell Order placed. Quantity reduced!");
      } else if (currentQty === sellQty) {
        await HoldingsModel.deleteOne({ name, userEmail: email });
        return res.send("Sell Order placed. Holding sold out!");
      } else {
        return res.status(400).send("Error: You are trying to sell more than you own!");
      }
    } else {
      return res.status(404).send("Error: You don't own this stock!");
    }
  } else {
    return res.send("Order saved (No holding update)");
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log("App started on port " + PORT);
    dbConnect();
  });
}

module.exports = app;