import { convertSeconds } from "@/utils/helpers/convertSeconds";
import { getDate } from "@/utils/helpers/getDate";
import { getTime } from "@/utils/helpers/getTime";
import { CiClock2 } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import React, { FC } from "react";
import { IoExitOutline } from "react-icons/io5";
import { PiPersonSimpleRunLight } from "react-icons/pi";
import { ISingleModalData } from "../ReportsCardModal";

// type ModalItemType = {
//   agentState: string;
//   agentStateDuration: string;
//   agent_id: string;
//   banInfo: string;
//   create_data: string;
//   firstName: string;
//   id: string;
//   lastAgentStateDuration: string;
//   lastLockCause: string;
//   lastName: string;
//   lockCause: string;
//   login: number;
//   secondName: string;
//   ComeToWorkOnTime: boolean;
//   LeftAfterWork: boolean;
//   LastLoginTime: string;
//   TimeEndWork: string;
// };

type TableType = {
  modalData: ISingleModalData[];
  cardModalDataType: string;
};

const ReportsCardModalTable: FC<TableType> = ({
  modalData,
  cardModalDataType,
}) => {
  console.log(modalData);

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="tborder py-2">Номер</th>
          <th className="tborder py-2">Время / Дата</th>
          {cardModalDataType === "all" ? (
            <th className="tborder py-2">Причина</th>
          ) : (
            ""
          )}

          <th className="tborder py-2">Длительность</th>
        </tr>
      </thead>

      <tbody className="borderr">
        {modalData?.map((item, index) => {
          return (
            <tr key={item?.agent_id}>
              <td className="tborder py-2 text-center">{index + 1}</td>
              <td className="tborder py-2 text-center">
                {`${getTime(item?.create_data)} / ${getDate(
                  item?.create_data
                )}`}
              </td>

              {cardModalDataType === "all" ? (
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
              ) : (
                ""
              )}

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
