import React from "react";
import { DatePicker } from "../../reusable/DatePicker";
import FilterByDayWeekMonth from "@/components/reusable/FilterByDayWeekMonth";

const HeaderFilter = () => {
  return (
  <div className="flex gap-5 bg-main_blue rounded-md  dark:bg-[#3a3a3a]">
      <div className="flex justify-between w-1/2 p-2 bg-white rounded-md dark:bg-[#424242] dark:shadow-lg">
        <DatePicker />
        <FilterByDayWeekMonth />
      </div>
      <div className="w-1/2 p-2 bg-white rounded-md dark:bg-[#424242] dark:shadow-lg">
        Погода и тд...
      </div>
    </div>
  );
};

export default HeaderFilter;
