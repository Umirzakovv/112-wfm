"use client"

import React, {
  Dispatch,
  FC,
  SetStateAction,
} from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatisticsTab from "../StatisticsTab";

type StatisticsTabsType = {
  acceptedCalls: number;
  presentedCalls: number;
  lostCalls: number;
  lostAtQueue: number;
  setTabType: Dispatch<SetStateAction<string>>;
};

const StatisticsTabs: FC<StatisticsTabsType> = ({
  acceptedCalls,
  presentedCalls,
  lostCalls,
  lostAtQueue,
  setTabType,
}) => {
  const handleTabClick = (e: string) => {
    setTabType(e);
  };

  return (
    <Tabs defaultValue="acceptedCalls" onValueChange={(e) => handleTabClick(e)}>
      <TabsList className="h-max shadow-lg w-full dark:bg-main_grey">
        <TabsTrigger value="acceptedCalls">
          <StatisticsTab
            title="Поступившие звонки"
            amount={acceptedCalls}
            color="#fdfdtf"
          />
        </TabsTrigger>

        <TabsTrigger value="presentedCalls">
          <StatisticsTab
            title="Предоствленные звонки"
            amount={presentedCalls}
            color="#32C9A3"
          />
        </TabsTrigger>

        <TabsTrigger value="lostCalls">
          <StatisticsTab
            title="Потерянные звонки"
            amount={lostCalls}
            color="#FFD023"
          />
        </TabsTrigger>

        <TabsTrigger value="lostAtQueue">
          <StatisticsTab
            title="Отбывшихся в очереди"
            amount={lostAtQueue}
            color="#DD4545"
          />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default StatisticsTabs;
