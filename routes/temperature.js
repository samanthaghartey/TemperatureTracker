const express = require("express");
const router = express.Router();
const Temperature = require("../model/temperature.js");

router.get("/", async (req, res) => {
  try {
    const temperatures = await Temperature.find();
    res.send(temperatures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const temperature = new Temperature({
    temperature: req.body.temperature,
    humidity: req.body.humidity,
  });
  try {
    const newTemperature = await temperature.save();
    res.status(201).json({ message: "created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.send(temperature);
});

module.exports = router;
