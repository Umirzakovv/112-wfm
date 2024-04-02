import PieChart from "@/components/reusable/PieChart";
import React, { useEffect, useState } from "react";
import StatisiticsBtns from "../StatisticsBtns";
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://192.168.42.176:1000/");

const PieChartSideCard = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    socket.emit("data", (receivedData: []) => {
      setData(receivedData);
    });
  }, []);
  return (
    <div className="border bg-white rounded-lg flex justify-between items-center w-max p-5">
      <PieChart data={data} />
      <StatisiticsBtns data={data} />
    </div>
  );
};

export default PieChartSideCard;
