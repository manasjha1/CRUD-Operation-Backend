const express = require("express");
require("dotenv").config();

const sequelize = require("./config/database");
const studentRoutes = require("./routes/StudentsRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

// Parse JSON request bodies
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Student API",
  });
});

// Student routes
app.use("/students", studentRoutes);

// Start server only after database is ready
async function startServer() {
  try {
    await sequelize.authenticate();

    console.log("MySQL connected successfully!");

    await sequelize.sync();

    console.log("Database synchronized!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error);
    process.exit(1);
  }
}

startServer();
