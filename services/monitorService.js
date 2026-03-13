const axios = require("axios");
const Log = require("../models/Log");

const checkAPI = async (url) => {
  const start = Date.now();

  try {
    const response = await axios.get(url);
    const responseTime = Date.now() - start;

    const log = await Log.create({
      url,
      status: response.status,
      responseTime,
    });

    return log;
  } catch (error) {
    const responseTime = Date.now() - start;

    const log = await Log.create({
      url,
      status: "DOWN",
      responseTime,
    });

    return log;
  }
};

module.exports = { checkAPI };
