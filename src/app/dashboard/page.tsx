import ListOperators from "@/components/dashboard/ListOperators";
import PieChartSideCard from "@/components/dashboard/PieChartSideCard";
import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <div>
      <PieChartSideCard />
      <ListOperators />
    </div>
  );
};

export default Dashboard;
