const fetch = require("node-fetch");
const Transaction = require("../models/Transaction");

const seedDatabase = async () => {
  try {
    console.log("Start.. seedData")
    const response = await fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json");
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    
    const data = await response.json();
    await Transaction.insertMany(data);
    
    console.log("Database Seeded Successfully!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
};

module.exports = seedDatabase;
