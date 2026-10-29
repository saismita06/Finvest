const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  userEmail: { type: String, default: "general" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = { OrdersSchema };