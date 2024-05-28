"use client";

import BarGraph from "@/components/dashboard/BarGraph";
import ListOperators from "@/components/dashboard/ListOperators";
import MapCard from "@/components/dashboard/MapCard";
import PieChartSideCard from "@/components/dashboard/PieChartCard";
import StatisticsTabs from "@/components/dashboard/StatisticsTabs";
import { FC, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import DashboardLayout from "./layout";
import { ReportsContext } from "@/context/ReportsContext";
const socketUrl = "http://192.168.42.176:1000/";

const socket: Socket = io(socketUrl);

const Dashboard: FC = () => {
  const [data, setData] = useState<[]>([]);
  const [typeOperators, setTypeOperators] = useState<string>("default");

  useEffect(() => {
    socket.emit("data", (receivedData: []) => {
      setData(receivedData);
    });
  }, []);

  // useEffect(() => {
  //   console.log(fromDate, toDate);

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       `http://192.168.42.176:1000/api/v1/services/statistik?fromDate=${fromDate}&untilDate=${toDate}`
    //     );
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const result = await response.json();
    //     console.log(result);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
  // }, [fromDate]);
  return (
    <DashboardLayout>
      <div className=" flex justify-between gap-5">
        <div className="w-1/2 grid gap-5 h-max">
          <MapCard />
          <StatisticsTabs />
          <BarGraph />
        </div>
        <div className="w-1/2 h-max grid gap-5">
          <PieChartSideCard data={data} setTypeOperators={setTypeOperators} />
          <ListOperators data={data} typeOperators={typeOperators} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
