const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  url: String,
  status: String,
  responseTime: Number,
  checkedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Log", logSchema);
