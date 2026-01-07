const mongoose = require("mongoose");

const OreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ore", OreSchema);
