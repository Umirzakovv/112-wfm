"use client";

import BarGraph from "@/components/dashboard/BarGraph";
import ListOperators from "@/components/dashboard/ListOperators";
import PieChartSideCard from "@/components/dashboard/PieChartSideCard";
import StatisticsTab from "@/components/dashboard/StatisticsTab";
import { FC, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
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
  return (
    <div className=" flex justify-between w-full gap-5">
      <div className="w-1/2 grid gap-5 h-max">
        <StatisticsTab />
        <BarGraph />
      </div>
      <div className="w-1/2 grid gap-5">
        <PieChartSideCard data={data} setTypeOperators={setTypeOperators} />
        <ListOperators data={data} typeOperators={typeOperators} />
      </div>
    </div>
  );
};

export default Dashboard;
