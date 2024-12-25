import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { getBarChartData } from "../api";

export default function BarChartComponent({ selectedMonth }) {
    const [barData, setBarData] = useState([]);

  useEffect(() => {
    const fetchBarChartData = async () => {
      const  data  = await getBarChartData(selectedMonth) || {};

      if (data && data.ranges) {
        const rangeLabels = [
          "0-100", "101-200", "201-300", "301-400", "401-500",
          "501-600", "601-700", "701-800", "801-900", "900+"
        ];

        setBarData(
          data.ranges.map((count, index) => ({
            name: rangeLabels[index],  
            count: count,
          }))
        );
      }
    };


    fetchBarChartData();
  }, [selectedMonth]);

  return (
     <BarChart width={800} height={250} data={barData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis 
      domain={['auto', 'auto']} 
      tickFormatter={(value) => `${value}`} 
      ticks={[0, 2, 4, 6, 8, 10]} 
      />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  )
}
