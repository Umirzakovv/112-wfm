import { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import StatisiticsBtn from "../StatisticsBtn";
import { IData } from "@/utils/types-interfaces/dashboard";

type BtnsType = {
  sidebarData: IData[];
  setTypeOperators: Dispatch<SetStateAction<string>>;
};

const StatisiticsBtns: FC<BtnsType> = ({ sidebarData, setTypeOperators }) => {
  const handleBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    setTypeOperators(e?.currentTarget?.value);
  };

  return (
    <>
      {sidebarData?.map((item) => {
        return (
          <div key={item?.goup_id} className="grid gap-3">
            <StatisiticsBtn
              title="В очереди"
              amount={item?.queue}
              color="#ebecf7"
              darkColor="#111c7d"
              onClick={handleBtnClick}
            />
            <StatisiticsBtn
              title="В сети"
              amount={item?.online}
              color="#d6f4ed"
              darkColor="#349e84"
              onClick={handleBtnClick}
            />
            <StatisiticsBtn
              title="В работе"
              amount={item?.in_job}
              color="#fff6d3"
              darkColor="#c4a32a"
              onClick={handleBtnClick}
            />
            <StatisiticsBtn
              title="Свободные"
              amount={item?.free}
              color="#f4d6ee"
              darkColor="#9e3487"
              onClick={handleBtnClick}
            />
            <StatisiticsBtn
              title="Заблокированные"
              amount={item?.locked}
              color="#f9c9c9"
              darkColor="#b54747"
              onClick={handleBtnClick}
            />
          </div>
        );
      })}
    </>
  );
};

export default StatisiticsBtns;
