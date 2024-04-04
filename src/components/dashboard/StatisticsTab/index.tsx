import React, { FC } from "react";

type TabType = {
  title: string;
  amount: number;
  color: string;
};

const StatisticsTab: FC<TabType> = ({ title, amount, color }) => {
  return (
    <div>
      <div className="flex items-center">
        <p className="w-4 h-4 bg-main_blue rounded mr-2" style={{ background:color }}></p>
        <p className="text-xs font-medium dark:text-white">{title}</p>
      </div>
      <p className="text-lg text-black font-bold dark:text-white">{amount}</p>
    </div>
  );
};

export default StatisticsTab;
