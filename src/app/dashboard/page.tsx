"use client";

import ListOperators from "@/components/dashboard/ListOperators";
import PieChartSideCard from "@/components/dashboard/PieChartSideCard";
import { FC, useState } from "react";

const Dashboard: FC = () => {
  const [data, setData] = useState<[]>([]);
  return (
    <div>
      <PieChartSideCard />
      <ListOperators />
    </div>
  );
};

export default Dashboard;
