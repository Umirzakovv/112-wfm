"use client"

import React, { FC, useContext, useState } from "react";
import ReportsCards from "@/components/reports/ReportsCards";
import Spinner from "@/components/reusable/Spinner";
import { ReportsContext } from "@/context/ReportsContext";

const Reports: FC = () => {
  const { isReportsDataLoading } = useContext(ReportsContext);
  return (
    <div>
      <h4 className="text-main_blue text-lg my-4 dark:text-white">
        Список нарушителей
      </h4>
      <div>{isReportsDataLoading ? <Spinner /> : <ReportsCards />}</div>
    </div>
  );
};

export default Reports;
