import React, { FC } from "react";
import ReportsCardBodySingleInfo from "../ReportsCardBodySingleInfo";
import { CardType } from "../ReportsCards";

const ReportsCardBody: FC<CardType> = ({ item }) => {

  return (
    <div className="bg-white rounded-md dark:bg-main_grey">
      <ReportsCardBodySingleInfo
        imgSrc="/barchart.svg"
        title="Кол-во недоработанных дней"
        amount={item?.CountAgentWorkedLess}
        color="#4F46E5"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/creative-man.svg"
        title="Кол-во опоздавших дней"
        amount={item?.CountAgentсomeToWorkLate}
        color="#EA4343"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/computer.svg"
        title="Кол-во ранний уход"
        amount={item?.CountAgentLeftAfterWork}
        color="#E83FE1"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/sofa.svg"
        title="Кол-во нарушений перерывов"
        amount={item?.CountAgentBanTime}
        color="#8D99AF"
      />
      <ReportsCardBodySingleInfo
        imgSrc="/runner.svg"
        title="Кол-во переходов блока на блок"
        amount={item?.CountAgentBlock}
        color="#23DBC5"
      />
    </div>
  );
};

export default ReportsCardBody;
