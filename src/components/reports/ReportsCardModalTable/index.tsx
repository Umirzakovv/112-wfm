import { convertSeconds } from "@/utils/helpers/convertSeconds";
import { getDate } from "@/utils/helpers/getDate";
import { getTime } from "@/utils/helpers/getTime";
import { CiClock2 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import React, { FC } from "react";
import { IoExitOutline } from "react-icons/io5";
import { PiPersonSimpleRunLight } from "react-icons/pi";

type ModalTypeItem = {
  agentState: string;
  agentStateDuration: string;
  agent_id: string;
  banInfo: string;
  create_data: string;
  firstName: string;
  id: string;
  lastAgentStateDuration: string;
  lastLockCause: string;
  lastName: string;
  lockCause: string;
  login: number;
  secondName: string;
  ComeToWorkOnTime: boolean;
  LeftAfterWork: boolean;
  LastLoginTime: string;
  TimeEndWork: string;
};

type ResultsType = {
  results: ModalTypeItem[];
};

interface ITableData {
  data?: ResultsType;
}

type TableType = {
  dataType: string;
  modalData: ITableData;
};

const ReportsCardModalTable: FC<TableType> = ({ dataType, modalData }) => {
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="tborder py-2">Время / Дата</th>

          <th className="tborder py-2">Причина</th>
          <th className="tborder py-2">
            {" "}
            {dataType === "first" ? "Длительность" : "Время прихода и ухода"}
          </th>
        </tr>
      </thead>

      <tbody className="borderr">
        {modalData?.data?.results?.map((item) => {
          return (
            <tr key={item?.agent_id}>
              <td className="tborder py-2 text-center">
                {`${getTime(item?.create_data)} / ${getDate(
                  item?.create_data
                )}`}
              </td>

              <td className="tborder py-2">
                <div className="flex items-center justify-center">
                  {item?.banInfo === "time" ? (
                    <CiClock2 />
                  ) : item?.banInfo === "block" ? (
                    <>
                      <CiLock /> <GoArrowRight />
                      <CiLock />
                    </>
                  ) : item?.ComeToWorkOnTime === false ? (
                    <PiPersonSimpleRunLight />
                  ) : (
                    <IoExitOutline />
                  )}
                </div>
              </td>

              <td className="tborder py-2 text-center ">
                <div className="flex items-center justify-center">
                  {item?.banInfo === "time" ? (
                    convertSeconds(item?.agentStateDuration)
                  ) : item?.banInfo === "block" ? (
                    <>
                      {convertSeconds(item?.lastAgentStateDuration)}
                      <GoArrowRight />{" "}
                      {convertSeconds(item?.agentStateDuration)}
                    </>
                  ) : item?.LastLoginTime === "not login" ? (
                    "Не пришел(лa) на работу"
                  ) : item?.ComeToWorkOnTime === false ? (
                    `${item?.LastLoginTime} - ${item?.TimeEndWork}`
                  ) : item?.LeftAfterWork === false ? (
                    `${item?.LastLoginTime} - ${item?.TimeEndWork}`
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReportsCardModalTable;
