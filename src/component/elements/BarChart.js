import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Sales for 2020(M)",
        data: [3, 2, 5, 4, 8],
        borderColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        backgroundColor: [
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
      },
      {
        label: "Sales for 2019(M)",
        data: [4, 3, 4, 7, 3],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)"
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
      },
    ],
  };
  const option = {
    title: {
      display: true,
      text: "Bar Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 1
          }
        }
      ]
    }
  };
  return (
    <div className="chart">
      <hr/>
      <Bar data={data} option={option} />
    </div>
  );
}

export default BarChart;
