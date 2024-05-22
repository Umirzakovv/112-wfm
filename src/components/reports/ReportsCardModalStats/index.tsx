import React, { FC } from "react";
import { RiTimerFlashLine } from "react-icons/ri";
import { CiClock1, CiLock, CiTimer } from "react-icons/ci";
import { PiPersonSimpleRunLight } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";

interface ISingleCard {
  CountAgentBanTime: number;
  CountAgentBlock: number;
  CountAgentLeftAfterWork: number;
  CountAgentWorkedLess: number;
  CountAgentсomeToWorkLate: number;
}
type StatsType = {
  singleCardInfo: ISingleCard[];
};

const ReportsCardModalStats: FC<StatsType> = ({ singleCardInfo }) => {
  return (
    <div className="flex justify-between gap-5 ">
      <div className="flex items-center  w-1/5 rounded-lg p-2 border-2 border-white border-b-[#63AAEC] shadow-md">
        <CiClock1 color="#63AAEC" size={45} />
        <div className="ml-4">
          <p className="text-sm">Кол-во превышений перерывов</p>
          <p className="text-lg text-[#63AAEC]">
            {singleCardInfo[0].CountAgentBanTime}
          </p>
        </div>
      </div>

      <div className="flex items-center w-1/5 rounded-lg p-2 border-2 border-white border-b-[#E09018] shadow-md">
        <CiLock color="#E09018" size={45} />
        <div className="ml-4">
          <p className="text-sm">Кол-во переходов блок на блок</p>
          <p className="text-lg text-[#E09018]">
            {singleCardInfo[0].CountAgentBlock}
          </p>
        </div>
      </div>

      <div className="flex items-center w-1/5 rounded-lg p-2 border-2 border-white border-b-[#8B45E3] shadow-md">
        <PiPersonSimpleRunLight color="#8B45E3" size={45} />
        <div className="ml-4">
          <p className="text-sm">Кол-во опазданий</p>
          <p className="text-lg text-[#8B45E3]">
            {singleCardInfo[0].CountAgentсomeToWorkLate}
          </p>
        </div>
      </div>

      <div className="flex items-center w-1/5 rounded-lg p-2 border-2 border-white border-b-[#EA4343] shadow-md">
        <IoExitOutline color="#EA4343" size={45} />
        <div className="ml-4">
          <p className="text-sm">Кол-во ранних уходов</p>
          <p className="text-lg text-[#EA4343]">
            {singleCardInfo[0].CountAgentLeftAfterWork}
          </p>
        </div>
      </div>

      <div className="flex items-center w-1/5 rounded-lg p-2 border-2 border-white border-b-[#E83FE1] shadow-md">
        <MdOutlineWorkHistory color="#E83FE1" size={45} />
        <div className="ml-4">
          <p className="text-sm">Кол-во недоработанных дней</p>
          <p className="text-lg text-[#E83FE1]">
            {singleCardInfo[0].CountAgentWorkedLess}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportsCardModalStats;
