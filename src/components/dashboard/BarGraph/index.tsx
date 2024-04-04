import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FC } from "react";
Chart.register(...registerables);

const BarGraph: FC = () => {
  const colors = ["#4f46e5"];
  const labels = [
    "28.04",
    "29.04",
    "30.04",
    "31.04",
    "01.05",
    "28.04",
    "29.04",
    "30.04",
    "31.04",
    "01.05",
    "28.04",
    "29.04",
    "30.04",
    "31.04",
    "01.05",
  ];
  return (
    <Bar
      className="w-full bg-white rounded dark:bg-main_grey"
      data={{
        labels,
        datasets: [
          {
            label: "Revenue",
            data: [
              300, 200, 100, 300, 500, 200, 150, 600, 900, 100, 400, 600, 120,
              200, 100,
            ],
            backgroundColor: colors,
            borderColor: colors,
            borderRadius: 5,
          },
        ],
      }}
    />
  );
};

export default BarGraph;
