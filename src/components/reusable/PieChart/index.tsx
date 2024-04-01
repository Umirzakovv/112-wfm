"use client";

import React, { FC } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieChart: FC = () => {
  return (
    <div className="w-[234px]">
      <Doughnut
        data={{
          labels: ["A", "B", "C"],
          datasets: [
            {
              label: "Revenue",
              data: [200, 300, 500, 250, 300],
              backgroundColor: [
                "#dd4545",
                "#4f45dd",
                "#000f99",
                "#32c9a3",
                "#ffd023",
              ],
              borderColor: [
                "#dd4545",
                "#4f45dd",
                "#000f99",
                "#32c9a3",
                "#ffd023",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
