const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const monitorRoutes = require("./routes/monitorRoutes");
const morgan = require("morgan");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/monitor", monitorRoutes);

app.get("/", (req, res) => {
  res.send("API Monitor Service Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
