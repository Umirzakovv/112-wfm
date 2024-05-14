"use client";

import { FC, useContext } from "react";
import ReportsCard from "../ReportsCard";
import { ReportsContext } from "@/context/ReportsContext";

export interface IItem {
  agent_id: string;
  name: string;
  work_time: string;
  id: string;
  CountAgentсomeToWorkLate: number; 
  CountAgentLeftAfterWork: number;
  CountAgentBanTime: number;
  CountAgentBlock: number;
}

export type CardType = {
  item: IItem;
};

const ReportsCards: FC = () => {
  const { reportsData } = useContext(ReportsContext);

  return (
    <div>
      <div className={`grid grid-cols-4 gap-10`}>
        {reportsData?.map((item: IItem) => {
          console.log(item);

          return <ReportsCard key={item?.agent_id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ReportsCards;
