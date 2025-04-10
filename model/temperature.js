const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
  temperature: { type: String, required: true },
  humidity: { type: String, required: true },
  date: { type: String, required: true, default: Date.now() },
});

module.exports = mongoose.model("Temperature", tempSchema);
