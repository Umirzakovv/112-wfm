"use client";

import React, { FC, useState } from "react";
// import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { IData } from "@/utils/types-interfaces/dashboard";
Chart.register(ArcElement);

type PieChartType = {
  data: [IData];
};

interface IItem {
  item: IData;
}

const PieChart: FC<PieChartType> = ({ data }) => {
  console.log(data[0]);

  return (
    <div className="w-[234px]">
      <Doughnut
        data={{
          labels: ["A", "B", "C", "D", "E"],
          datasets: [
            {
              label: "Revenue",
              data: [
                data[0]?.queue,
                data[0]?.online,
                data[0]?.in_job,
                data[0]?.free,
                data[0]?.locked,
              ],
              backgroundColor: [
                "#ebecf7",
                "#d6f4ed",
                "#fff6d3",
                "#f4d6ee",
                "#f9c9c9",
              ],
              borderColor: [
                "#ebecf7",
                "#d6f4ed",
                "#fff6d3",
                "#f4d6ee",
                "#f9c9c9",
              ],
              hoverOffset: 4
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
