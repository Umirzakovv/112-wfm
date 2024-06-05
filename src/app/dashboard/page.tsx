"use client";

import BarGraph from "@/components/dashboard/BarGraph";
import ListOperators from "@/components/dashboard/ListOperators";
import MapCard from "@/components/dashboard/MapCard";
import PieChartSideCard from "@/components/dashboard/PieChartCard";
import StatisticsTabs from "@/components/dashboard/StatisticsTabs";
import { FC, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import DashboardLayout from "./layout";
import { DashboardContext } from "@/context/DashboardContext";
import { correctDate } from "@/utils/helpers/correctDate";
const socketUrl = "http://192.168.42.176:1000/";

const socket: Socket = io(socketUrl);

export type ItemType = {
  acceptedCallCount: string;
  averageCallDuration: string;
  averageTimeBeforeConnect: string;
  create_data: string;
  group_id: string;
  id: string;
  lostCallCount: string;
  presentedCallCount: string;
  queueDispatchedCallCoun: string;
  straggleCallCount: string;
};

const Dashboard: FC = () => {
  const [typeOperators, setTypeOperators] = useState<string>("default");
  const { sidebarData, setSidebarData } = useContext(DashboardContext);

  useEffect(() => {
    const fetchData = () => {
      socket.emit("data", (receivedData: []) => {
        setSidebarData(receivedData);
      });
    };
    fetchData();

    setInterval(() => {
      fetchData();
    }, 7000);
  }, []);

  const { fromDate } = useContext(DashboardContext);
  const { toDate } = useContext(DashboardContext);
  const correctedFromDate = correctDate(fromDate);
  const correctedToDate = correctDate(toDate);

  const [allStatsData, setAllStatsData] = useState<ItemType[]>([]);
  const [acceptedCalls, setAcceptedCalls] = useState<number>(0);
  const [presentedCalls, setPresentedCalls] = useState<number>(0);
  const [lostCalls, setLostCalls] = useState<number>(0);
  const [lostAtQueue, setLostAtQueue] = useState<number>(0);

  const [tabType, setTabType] = useState<string>("acceptedCalls");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://192.168.42.176:1000/api/v1/services/statistik?fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setAllStatsData(result);
      setAcceptedCalls(0);
      setPresentedCalls(0);
      setLostCalls(0);
      setLostAtQueue(0);

      result?.forEach((item: ItemType) => {
        setAcceptedCalls((prev) => (prev += +item?.acceptedCallCount));
        setPresentedCalls((prev) => (prev += +item?.presentedCallCount));
        setLostCalls((prev) => (prev += +item?.lostCallCount));
        setLostAtQueue((prev) => (prev += +item?.queueDispatchedCallCoun));
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fromDate, toDate]);
  return (
    <DashboardLayout>
      <div className=" flex justify-between gap-5">
        <div className="w-1/2 grid gap-5 h-max">
          <MapCard />
          <StatisticsTabs
            acceptedCalls={acceptedCalls}
            presentedCalls={presentedCalls}
            lostCalls={lostCalls}
            lostAtQueue={lostAtQueue}
            setTabType={setTabType}
          />
          <BarGraph allStatsData={allStatsData} tabType={tabType} />
        </div>
        <div className="w-1/2 h-max grid gap-5">
          <PieChartSideCard
            sidebarData={sidebarData}
            setTypeOperators={setTypeOperators}
          />
          <ListOperators
            sidebarData={sidebarData}
            typeOperators={typeOperators}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
