const express = require("express");
const {getTransactions} = require("../controllers/transactionController")
const {getStatistics} = require("../controllers/statisticsController");
const {getBarChartData} = require("../controllers/barChartController");
const router = express.Router();

router.get("/getTransactions", getTransactions);
router.get("/getStatistics", getStatistics);
router.get("/getBar-chart", getBarChartData);


module.exports = router;
