"use client"

import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FC } from "react";
import { ItemType } from "@/app/dashboard/page";
import { getDate } from "@/utils/helpers/getDate";
Chart.register(...registerables);

type BarGraphType = {
  allStatsData: ItemType[];
  tabType: string;
};

const BarGraph: FC<BarGraphType> = ({ allStatsData, tabType }) => {
  const colors = ["#4f46e5"];

  const labels: string[] = [];
  const data: number[] = [];

  allStatsData?.forEach((item) => {
    labels.push(getDate(item?.create_data));

    if (tabType === "acceptedCalls") {
      data.push(+item?.acceptedCallCount);
    } else if (tabType === "presentedCalls") {
      data.push(+item?.presentedCallCount);
    } else if (tabType === "lostCalls") {
      data.push(+item?.lostCallCount);
    } else {
      data.push(+item?.queueDispatchedCallCoun);
    }
  });

  return (
    <Bar
      className="w-full bg-white rounded dark:bg-main_grey"
      data={{
        labels,
        datasets: [
          {
            label: "",
            data,
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
