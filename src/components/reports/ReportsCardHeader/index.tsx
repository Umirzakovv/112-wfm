import React, { FC } from "react";
import { CardType } from "../ReportsCards";

const ReportsCardHeader: FC<CardType> = ({ item }) => {  
  return (
    <div className="flex justify-between items-center p-2 rounded-t-md ">
      <div>
        <h6 className="text-lg text-main_text">{item?.name}</h6>
        <p className="text-sm text-text_grey">ID РМО: {item?.id_login}</p>
      </div>
      <div>
        <p className="text-xs text-text_grey">Время работы</p>
        <p className="text-text_main dark:text-white">{item?.work_time}</p>
      </div>
    </div>
  );
};

export default ReportsCardHeader;
