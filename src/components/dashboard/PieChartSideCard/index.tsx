import PieChart from "@/components/reusable/PieChart";
import React from "react";
import StatisiticsBtns from "../StatisticsBtns";

const PieChartSideCard = () => {
  return (
    <div className="border bg-white rounded-lg flex justify-between items-center w-max p-5">
      <PieChart />
      <StatisiticsBtns />
    </div>
  );
};

export default PieChartSideCard;
