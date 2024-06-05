/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FC, useContext, useEffect } from "react";
import SidebarCard from "../SidebarCard";
import { Socket, io } from "socket.io-client";
import { DashboardContext } from "@/context/DashboardContext";

type SidebarType = {
  className?: string;
};

export type SidebarDataType = {
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

  // agentState: "4";
  // agentStateDuration: "1415";
  // agent_id: "12f855a1-a6fe-4fed-a99b-9d7a89e0e376";
  // banInfo: "time";
  // create_data: "2024-05-29T19:28:30.450Z";
  // firstName: "Xusniddinxo'ja";
  // id: "241";
  // lastAgentStateDuration: "14";
  // lastLockCause: "-1";
  // lastName: "Maxmudov";
  // lockCause: "2";
  // login: 21;
  // secondName: "Xasan o'g'li";
};

const socketUrl = "http://192.168.42.176:1000/";
const socket: Socket = io(socketUrl);

const Sidebar: FC<SidebarType> = ({ className }) => {
  const { notifcationData, setNotifcationData } = useContext(DashboardContext);

  useEffect(() => {
    const fetchData = () => {
      socket.emit("agentsLockAtTheMoment", (receivedData: []) => {
        setNotifcationData(receivedData);
      });
    };
    setInterval(() => {
      fetchData();
    }, 7000);
    fetchData();
  }, []);

  return (
    <div
      className={`${className} transition-all duration-100 ease-linear overflow-hidden ml-5 rounded-t-md rounded-b-md bg-white h-[80vh] overflow-y-scroll dark:bg-main_dark`}
    >
      <h6 className="text-center mt-2 font-semibold">Список нарушающих </h6>
      {notifcationData?.map((item: SidebarDataType) => {
        return <SidebarCard key={item?.agent_id} item={item} />;
      })}
    </div>
  );
};

export default Sidebar;
