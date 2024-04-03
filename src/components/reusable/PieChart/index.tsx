"use client";

import React, { FC, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { IData } from "@/utils/types-interfaces/dashboard";
Chart.register(ArcElement);

type PieChartType = {
  data: [IData];
};

const PieChart: FC<PieChartType> = ({ data }) => {
  const colors = ["#ebecf7", "#d6f4ed", "#fff6d3", "#f4d6ee", "#f9c9c9"];
  // const labels = [
  //   "В очереди",
  //   "В сети",
  //   "В работе",
  //   "Свободные",
  //   "Заблокированные",
  // ];
  return (
    <div className="w-[234px]">
      <Doughnut
        data={{
          // labels,
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
              backgroundColor: colors,
              borderColor: colors,
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
