"use client";

import FilterByDayWeekMonth from "@/components/reusable/FilterByDayWeekMonth";
import SearchInput from "../SearchInput";
import SelectByStatus from "../SelectByStatus";
import { DatePicker } from "@/components/reusable/DatePicker";
import React, { FC, useContext } from "react";
import { ReportsContext } from "@/context/ReportsContext";

const HeaderFilter: FC = () => {
  const { setFromDate } = useContext(ReportsContext);
  const { setToDate } = useContext(ReportsContext);
  return (
    <header className="flex justify-between bg-white rounded-md px-5 py-2 dark:bg-[#424242]">
      <div className="flex items-center gap-2">
        <SelectByStatus />
        <SearchInput />
      </div>
      <DatePicker setFromDate={setFromDate} setToDate={setToDate} />
      <FilterByDayWeekMonth />
    </header>
  );
};




export default HeaderFilter;
