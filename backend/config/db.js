const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.log('Error: MongoDB Connected Failed');
    process.exit(1);
  }
};

module.exports = connectDB;

