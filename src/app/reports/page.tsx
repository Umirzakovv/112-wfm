import React, { FC } from "react";
import ReportsCards from "@/components/reports/ReportsCards";
import Spinner from "@/components/reusable/Spinner";

const Reports: FC = () => {
  return (
    <div>
      <Spinner />
      <h4 className="text-main_blue text-lg my-4 dark:text-white">Список нарушителей</h4>
      <div>
        <ReportsCards />
      </div>
    </div>
  );
};

export default Reports;
