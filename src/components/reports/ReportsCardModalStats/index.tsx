import React, { Dispatch, FC, MouseEvent, SetStateAction } from "react";
import { CiClock1, CiLock } from "react-icons/ci";
import { PiPersonSimpleRunLight } from "react-icons/pi";
import { IoExitOutline } from "react-icons/io5";
import { MdOutlineWorkHistory } from "react-icons/md";

interface ISingleCard {
  CountAgentBanTime: number;
  CountAgentBlock: number;
  CountAgentLeftAfterWork: number;
  CountAgentWorkedLess: number;
  CountAgentсomeToWorkLate: number;
  countAllbanInfo?: number;
  CountNb?: number
}
type StatsType = {
  singleCardInfo: ISingleCard[];
  cardModalDataType: string;
  seTCardModalDataType: Dispatch<SetStateAction<string>>;
};

const ReportsCardModalStats: FC<StatsType> = ({
  seTCardModalDataType,
  cardModalDataType,
  singleCardInfo,
}) => {
  const handleStatClick = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget } = e;
    const ariaValueText = currentTarget.getAttribute("aria-valuetext");
    if (ariaValueText) {
      seTCardModalDataType(ariaValueText);
    } else {
      console.log("aria-valuetext is not set");
    }
  };
  return (
    <div className="flex justify-between gap-3 mb-5">
      <div
        aria-valuetext="all"
        className={` ${
          cardModalDataType === "all" ? "bg-[#ddd]" : ""
        }  flex items-center w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#32c9a383] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <CiClock1 color="#32c9a383" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#32c9a383]">Все</p>
          <p className="text-lg text-[#32c9a383]">
            {singleCardInfo[0]?.countAllbanInfo}
          </p>
        </div>
      </div>
      <div
        aria-valuetext="exceeding-time"
        className={` ${
          cardModalDataType === "exceeding-time" ? "bg-[#ddd]" : ""
        } flex items-center  w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#63AAEC] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <CiClock1 color="#63AAEC" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#63AAEC]">Превышений перерывов</p>
          <p className="text-lg text-[#63AAEC]">
            {singleCardInfo[0]?.CountAgentBanTime}
          </p>
        </div>
      </div>

      <div
        aria-valuetext="block-to-block"
        className={`${
          cardModalDataType === "block-to-block" ? "bg-[#ddd]" : ""
        } flex items-center w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#E09018] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <CiLock color="#E09018" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#E09018]">Блок на блок</p>
          <p className="text-lg text-[#E09018]">
            {singleCardInfo[0]?.CountAgentBlock}
          </p>
        </div>
      </div>

      <div
        aria-valuetext="latecomers"
        className={`${
          cardModalDataType === "latecomers" ? "bg-[#ddd]" : ""
        } flex items-center w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#8B45E3] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <PiPersonSimpleRunLight color="#8B45E3" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#8B45E3]">Опаздании</p>
          <p className="text-lg text-[#8B45E3]">
            {singleCardInfo[0]?.CountAgentсomeToWorkLate}
          </p>
        </div>
      </div>

      <div
        aria-valuetext="left-early"
        className={`${
          cardModalDataType === "left-early" ? "bg-[#ddd]" : ""
        } flex items-center w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#EA4343] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <IoExitOutline color="#EA4343" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#EA4343]">Ранние уходы</p>
          <p className="text-lg text-[#EA4343]">
            {singleCardInfo[0]?.CountAgentLeftAfterWork}
          </p>
        </div>
      </div>

      <div
        aria-valuetext="work-less-nine-hours"
        className={`${
          cardModalDataType === "work-less-nine-hours" ? "bg-[#ddd]" : ""
        } flex items-center w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#E83FE1] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <MdOutlineWorkHistory color="#E83FE1" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#E83FE1]">Недоработанные дни</p>
          <p className="text-lg text-[#E83FE1]">
            {singleCardInfo[0]?.CountAgentWorkedLess}
          </p>
        </div>
      </div>
      <div
        aria-valuetext="absence"
        className={`${
          cardModalDataType === "absence" ? "bg-[#ddd]" : ""
        } flex items-center w-1/5 h-[100px] rounded-lg p-2 border-2 border-white border-b-[#E83FE1] shadow-md cursor-pointer hover:bg-[#eee]`}
        onClick={handleStatClick}
      >
        <MdOutlineWorkHistory color="#E83FE1" size={30} />
        <div className="ml-4">
          <p className="text-sm text-[#E83FE1]">Неявки</p>
          <p className="text-lg text-[#E83FE1]">
            {singleCardInfo[0].CountNb}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportsCardModalStats;
