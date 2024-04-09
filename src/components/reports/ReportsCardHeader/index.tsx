import React, { FC } from "react";

const ReportsCardHeader: FC = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-[#e1e6ef] rounded-t-md dark:bg-main_grey">
      <div>
        <h6 className="text-lg text-main_text">Азизов Азиз Азизович</h6>
        <p className="text-sm text-text_grey">ID РМО 4586</p>
      </div>
      <div>
        <p className="text-xs text-text_grey">Время работы</p>
        <p className="text-text_main dark:text-white">09:00 - 18:00</p>
      </div>
    </div>
  );
};

export default ReportsCardHeader;
