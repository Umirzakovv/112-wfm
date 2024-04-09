import React, { FC } from "react";
import ReportsCardBodySingleInfo from "../ReportsCardBodySingleInfo";

const ReportsCardBody: FC = () => {
  return (
    <div className="bg-white rounded-b-md">
      <ReportsCardBodySingleInfo
        imgSrc="/barchart.svg"
        title="Время прихода/ухода"
        amount="09:05 - 17:54"
        color="#4F46E5"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/creative-man.svg"
        title="Количество опоздавших дней"
        amount="12"
        color="#EA4343"
        bgColor="#f4f6f9"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/computer.svg"
        title="Количество ранний уход"
        amount="54"
        color="#E83FE1"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/sofa.svg"
        title="Количество нарушений перерывов"
        amount="74"
        color="#1F3462"
        bgColor="#f4f6f9"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/runner.svg"
        title="Количество переходов блока на блок"
        amount="26"
        color="#23DBC5"
      />
    </div>
  );
};

export default ReportsCardBody;
