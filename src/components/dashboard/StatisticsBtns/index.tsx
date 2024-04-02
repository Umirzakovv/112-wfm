import { FC } from "react";
import StatisiticsBtn from "../StatisticsBtn";
import { IData } from "@/utils/types-interfaces/dashboard";



type BtnsType = {
  data: [IData];
};

const StatisiticsBtns: FC<BtnsType> = ({ data }) => {
  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item?.goup_id} className="grid gap-3">
            <StatisiticsBtn
              title="В очереди"
              amount={item?.queue}
              color="#ebecf7"
            />
            <StatisiticsBtn
              title="В сети"
              amount={item?.online}
              color="#d6f4ed"
            />
            <StatisiticsBtn
              title="В работе"
              amount={item?.in_job}
              color="#fff6d3"
            />
            <StatisiticsBtn
              title="Свободные"
              amount={item?.free}
              color="#f4d6ee"
            />
            <StatisiticsBtn
              title="Заблокированные"
              amount={item?.locked}
              color="#f9c9c9"
            />
          </div>
        );
      })}
    </>
  );
};

export default StatisiticsBtns;
