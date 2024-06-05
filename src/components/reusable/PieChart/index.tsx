"use client";

import React, { FC, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { IData } from "@/utils/types-interfaces/dashboard";
Chart.register(ArcElement);

type PieChartType = {
  sidebarData: IData[];
};

const PieChart: FC<PieChartType> = ({ sidebarData }) => {
  const colors = ["#111c7d", "#349e84", "#c4a32a", "#9e3487", "#b54747"];
  return (
    <div className="w-[234px]">
      <Doughnut
        data={{
          // labels,
          datasets: [
            {
              label: "Статистика",
              data: [
                sidebarData[0]?.queue,
                sidebarData[0]?.online,
                sidebarData[0]?.in_job,
                sidebarData[0]?.free,
                sidebarData[0]?.locked,
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
