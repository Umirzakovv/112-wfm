import ReportsCard from "@/components/reports/ReportsCard";
import React, { FC } from "react";

const Reports: FC = () => {
  return (
    <div>
      <h4 className="text-main_blue text-lg my-4">Список нарушителей</h4>
      <div className="grid grid-cols-2 gap-10">
        <ReportsCard />
        <ReportsCard />
        <ReportsCard />
        <ReportsCard />
      </div>
    </div>
  );
};

export default Reports;
