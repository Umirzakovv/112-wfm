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
    <div className="border bg-white rounded-lg flex justify-between items-center w-max p-5">
      <PieChart data={data} />
      <StatisiticsBtns data={data} setTypeOperators={setTypeOperators} />
    </div>
  );
};

export default PieChartSideCard;
