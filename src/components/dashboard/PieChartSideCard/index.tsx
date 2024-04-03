import PieChart from "@/components/reusable/PieChart";
import { Dispatch, FC, SetStateAction } from "react";
import StatisiticsBtns from "../StatisticsBtns";
import { IData } from "@/utils/types-interfaces/dashboard";

type PieChartSideCardType = {
  data: [IData];
  setTypeOperators: Dispatch<SetStateAction<string>>;
};

const PieChartSideCard: FC<PieChartSideCardType> = ({
  data,
  setTypeOperators,
}) => {
  return (
    <div className="bg-white rounded-lg flex justify-between items-center py-5 px-20 w-full">
      <PieChart data={data} />
      <StatisiticsBtns data={data} setTypeOperators={setTypeOperators} />
    </div>
  );
};

export default PieChartSideCard;
