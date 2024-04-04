import React from "react";
import { DatePicker } from "../DatePicker";
import FilterByDayWeekMonth from "@/components/dashboard/FilterByDayWeekMonth";

const HeaderFilter = () => {
  return (
  <div className="flex p-2 bg-white rounded-md  dark:bg-[#424242]">
      <div className="flex justify-between w-1/2">
        <DatePicker />
        <FilterByDayWeekMonth />
      </div>
    </div>
  );
};

export default HeaderFilter;
