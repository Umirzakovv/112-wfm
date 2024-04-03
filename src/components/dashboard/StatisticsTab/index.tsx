import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StatisticsTab = () => {
  const handleTabChange = () => {
    console.log("ok");
  };
  return (
    <Tabs defaultValue="acceptedCalls" >
      <TabsList className="h-max shadow-lg w-full">

        <TabsTrigger value="acceptedCalls">
          <div>
            <div className="flex items-center">
              <p className="w-4 h-4 bg-main_blue rounded mr-2"></p>
              <p className="text-base text-[#9A9A9A] font-medium">
                Поступившие звонки
              </p>
            </div>
            <p className="text-base text-black font-bold">10 000</p>
          </div>
        </TabsTrigger>

        <TabsTrigger value="presentedCalls">
          <div>
            <div className="flex items-center">
              <p className="w-4 h-4 bg-main_blue rounded mr-2"></p>
              <p className="text-base text-[#9A9A9A] font-medium">
                Поступившие звонки
              </p>
            </div>
            <p className="text-base text-black font-bold">10 000</p>
          </div>
        </TabsTrigger>

        <TabsTrigger value="lostCalls">
          <div>
            <div className="flex items-center">
              <p className="w-4 h-4 bg-main_blue rounded mr-2"></p>
              <p className="text-base text-[#9A9A9A] font-medium">
                Поступившие звонки
              </p>
            </div>
            <p className="text-base text-black font-bold">10 000</p>
          </div>
        </TabsTrigger>

        <TabsTrigger value="lostInQueue">
          <div>
            <div className="flex items-center">
              <p className="w-4 h-4 bg-main_blue rounded mr-2"></p>
              <p className="text-base text-[#9A9A9A] font-medium">
                Поступившие звонки
              </p>
            </div>
            <p className="text-base text-black font-bold">10 000</p>
          </div>
        </TabsTrigger>

      </TabsList>
    </Tabs>
  );
};

export default StatisticsTab;
