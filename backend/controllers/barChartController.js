const Transaction = require("../models/Transaction");

const getBarChartData = async (req, res) => {
  try {
    const { month } = req.query;
  
   const monthIndex = new Date(Date.parse(`${month} 1`)).getMonth() + 1;
    const transactions = await Transaction.find({
      $expr: { $eq: [{ $month: "$dateOfSale" }, monthIndex] },
    });
   

    const ranges = Array(10).fill(0);

    transactions.forEach((t) => {
      if (t.price <= 100) ranges[0]++;
      else if (t.price <= 200) ranges[1]++;
      else if (t.price <= 300) ranges[2]++;
      else if (t.price <= 400) ranges[3]++;
      else if (t.price <= 500) ranges[4]++;
      else if (t.price <= 600) ranges[5]++;
      else if (t.price <= 700) ranges[6]++;
      else if (t.price <= 800) ranges[7]++;
      else if (t.price <= 900) ranges[8]++;
      else ranges[9]++;
    });

    res.status(200).json({ ranges });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBarChartData };
