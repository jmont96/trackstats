import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

export default function Csjbarchart(props) {
  const track_data = props.data;
  const loudness = Math.abs(track_data.loudness) / 2;
  var chart_loudness = 10 - loudness;

  const chart_data = [
    track_data.danceability * 10,
    track_data.energy * 10,
    track_data.valence * 10,
    chart_loudness,
  ];

  const data = {
    labels: ["Danceability", "Energy", "Happiness", "Loudness"],
    datasets: [
      {
        data: chart_data,
        backgroundColor: [
          "rgba(99, 102, 241, 0.2)",
          "rgba(99, 102, 241, 0.2)",
          "rgba(99, 102, 241, 0.2)",
          "rgba(99, 102, 241, 0.2)",
        ],
        borderColor: [
          "rgba(99, 102, 241, 1)",
          "rgba(99, 102, 241, 1)",
          "rgba(99, 102, 241, 1)",
          "rgba(99, 102, 241, 1)",
        ],
        borderWidth: 2,
        borderRadius: 12,
        lineWidth: 12,
      },
    ],
  };

  const options = {
    indexAxis: "y",

    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            display: true,
            zeroLineColor: "green",
            lineWidth: 1,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            display: true,
            lineWidth: 1,
          },
        },
      ],
    },

    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}
