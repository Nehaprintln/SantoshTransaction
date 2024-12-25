require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const seedDatabase = require("./seed/seedData");
const trRouters = require("./routes/transactionRoutes");
const PORT = process.env.PORT || 5001;
const app = express();


// Allow requests from specific origin
app.use(
  cors({
    origin: "*", //  frontend URL
    methods: ["GET", "PATCH"],
    // credentials: true // Enable this if you need cookies or authentication
  })
);

app.use(bodyParser.json());
// Connect to the database
connectDB();


app.get("/api/initialize", async (req, res) => {
  await seedDatabase();
  res.status(200).send("Database Initialized!");
});



// Routes
app.use("/api", trRouters);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});

// Export the app for Vercel's serverless function
module.exports = app;
