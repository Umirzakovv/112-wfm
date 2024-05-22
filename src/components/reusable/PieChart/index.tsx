"use client";

import React, { FC, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { IData } from "@/utils/types-interfaces/dashboard";
Chart.register(ArcElement);

type PieChartType = {
  data: IData[];
};

const PieChart: FC<PieChartType> = ({ data }) => {
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
