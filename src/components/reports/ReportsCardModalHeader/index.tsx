import { FC } from "react";

interface ISingleCard {
  name: string;
  id: string;
  work_time: string;
  CountAgentBanTime: number;
  CountAgentBlock: number;
  CountAgentLeftAfterWork: number;
  CountAgentWorkedLess: number;
  CountAgentсomeToWorkLate: number;
  agent_id: string;
  allworkTime: number;
  create_data: string;
  id_login: string;
  service_name: string;
}

type HeaderType = {
  singleCardInfo: ISingleCard[];
};

const ReportsCardModalHeader: FC<HeaderType> = ({ singleCardInfo }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="text-lg text-main_text">{singleCardInfo[0]?.name}</h2>
        <p className="text-sm text-text_grey">ID РМ: {singleCardInfo[0]?.id}</p>
      </div>
      <div>
        <p className="text-xs text-text_grey">Время работы</p>
        <p className="text-text_main dark:text-white">
          {singleCardInfo[0]?.work_time}
        </p>
      </div>
    </div>
  );
};

export default ReportsCardModalHeader;
