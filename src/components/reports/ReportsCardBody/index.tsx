import React, { FC } from "react";
import ReportsCardBodySingleInfo from "../ReportsCardBodySingleInfo";
import { CardType } from "../ReportsCards";

const ReportsCardBody: FC<CardType> = ({ item }) => {
  return (
    <div className="bg-white rounded-md">
      <ReportsCardBodySingleInfo
        imgSrc="/barchart.svg"
        title="Недоработка"
        amount={"Скоро"}
        color="#4F46E5"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/creative-man.svg"
        title="Количество опоздавших дней"
        amount={item?.CountAgentсomeToWorkLate}
        color="#EA4343"
        bgColor="#f4f6f9"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/computer.svg"
        title="Количество ранний уход"
        amount={item?.CountAgentLeftAfterWork}
        color="#E83FE1"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/sofa.svg"
        title="Количество нарушений перерывов"
        amount={item?.CountAgentBanTime}
        color="#1F3462"
        bgColor="#f4f6f9"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/runner.svg"
        title="Количество переходов блока на блок"
        amount={item?.CountAgentBlock}
        color="#23DBC5"
      />
    </div>
  );
};

export default ReportsCardBody;
