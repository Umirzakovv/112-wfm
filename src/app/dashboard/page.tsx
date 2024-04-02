"use client";

import ListOperators from "@/components/dashboard/ListOperators";
import PieChartSideCard from "@/components/dashboard/PieChartSideCard";
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
    <div>
      <PieChartSideCard
        data={data}
        setTypeOperators={setTypeOperators}
      />
      <ListOperators data={data} typeOperators={typeOperators} />
    </div>
  );
};

export default Dashboard;
