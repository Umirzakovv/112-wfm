import React, { FC } from "react";
import ReportsCards from "@/components/reports/ReportsCards";

const Reports: FC = () => {
  return (
    <div>
      <h4 className="text-main_blue text-lg my-4 dark:text-white">Список нарушителей</h4>
      <div>
        <ReportsCards />
      </div>
    </div>
  );
};

export default Reports;
