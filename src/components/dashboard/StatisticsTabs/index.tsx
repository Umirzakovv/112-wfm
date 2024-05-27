import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StatisticsTab from "../StatisticsTab";

const StatisticsTabs = () => {

  // const handle

  return (
    <Tabs defaultValue="acceptedCalls">
      <TabsList className="h-max shadow-lg w-full dark:bg-main_grey">
        <TabsTrigger value="acceptedCalls">
          <StatisticsTab
            title="Поступившие звонки"
            amount={10000}
            color="#fdfdtf"
          />
        </TabsTrigger>

        <TabsTrigger value="presentedCalls">
          <StatisticsTab
            title="Предоствленные звонки"
            amount={10000}
            color="#32C9A3"
          />
        </TabsTrigger>

        <TabsTrigger value="lostCalls">
          <StatisticsTab
            title="Потерянные звонки"
            amount={10000}
            color="#FFD023"
          />
        </TabsTrigger>

        <TabsTrigger value="lostInQueue">
          <StatisticsTab
            title="Отбывшихся в очереди"
            amount={10000}
            color="#DD4545"
          />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default StatisticsTabs;
