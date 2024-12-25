import React, { useState, useEffect } from "react";
import { getStatistics } from "../api";

export default function StatisticsBox({ selectedMonth }) {
    const [statistics, setStatistics] = useState({});
    
  useEffect(() => {
    const fetchStatistics = async () => {
      const data  = await getStatistics(selectedMonth);
      setStatistics(data);
    };

    fetchStatistics();
  }, [selectedMonth]);
  return (
    <div>
    <h3>Statistics - {selectedMonth}</h3>
    {statistics ? (
      <ul>
        <li><div className="label">Total Sale:</div><div className="value">{statistics.totalSale}</div> </li>
        <li><div className="label">Total Sold Items:</div> <div className="value">{statistics.totalSoldItems}</div></li>
        <li><div className="label">Total Not Sold Items:</div><div className="value">{statistics.totalNotSoldItems}</div> </li>
      </ul>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}
