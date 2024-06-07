"use client"

import React, { useContext } from "react";
import { DatePicker } from "../../reusable/DatePicker";
import FilterByDayWeekMonth from "@/components/reusable/FilterByDayWeekMonth";
import { DashboardContext } from "@/context/DashboardContext";

const HeaderFilter = () => {
  const { setFromDate } = useContext(DashboardContext);
  const { setToDate } = useContext(DashboardContext);
  
  return (
    <div className="flex gap-5 bg-main_blue rounded-md dark:bg-[#3a3a3a]">
      <div className="flex justify-between w-1/2 p-2 bg-white rounded-md dark:bg-[#424242] dark:shadow-lg">
        <DatePicker setFromDate={setFromDate} setToDate={setToDate} />
        <FilterByDayWeekMonth />
      </div>
      <div className="w-1/2 p-2 bg-white rounded-md dark:bg-[#424242] dark:shadow-lg">
        Погода и тд...
      </div>
    </div>
  );
};

export default HeaderFilter;
