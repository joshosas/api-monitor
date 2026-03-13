const express = require("express");
const router = express.Router();
const { checkAPI } = require("../services/monitorService");
const Log = require("../models/Log");

router.post("/check", async (req, res) => {
  const { url } = req.body;

  try {
    const result = await checkAPI(url);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/logs", async (req, res) => {
  const logs = await Log.find().sort({ checkedAt: -1 });
  res.json(logs);
});

module.exports = router;
