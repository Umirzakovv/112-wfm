import PieChart from "@/components/reusable/PieChart";
import { Dispatch, FC, SetStateAction } from "react";
import StatisiticsBtns from "../StatisticsBtns";
import { IData } from "@/utils/types-interfaces/dashboard";

type PieChartSideCardType = {
  sidebarData: IData[];
  setTypeOperators: Dispatch<SetStateAction<string>>;
};

const PieChartSideCard: FC<PieChartSideCardType> = ({
  sidebarData,
  setTypeOperators,
}) => {
  return (
    <div className="bg-white rounded-lg flex justify-between items-center py-7 px-20 w-full dark:bg-main_grey">
      <PieChart sidebarData={sidebarData} />
      <StatisiticsBtns sidebarData={sidebarData} setTypeOperators={setTypeOperators} />
    </div>
  );
};

export default PieChartSideCard;
