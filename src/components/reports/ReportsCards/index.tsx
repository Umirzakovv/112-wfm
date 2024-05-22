"use client";

import { FC, useContext, useState } from "react";
import ReportsCard from "../ReportsCard";
import { ReportsContext } from "@/context/ReportsContext";
import ReportsCardModal from "../ReportsCardModal";
import Curtain from "@/components/reusable/Curtain";

export interface IItem {
  agent_id: string;
  name: string;
  work_time: string;
  id: string;
  id_login: string;
  CountAgentсomeToWorkLate: number;
  CountAgentLeftAfterWork: number;
  CountAgentBanTime: number;
  CountAgentBlock: number;
  CountAgentWorkedLess: number;
}

export type CardType = {
  id?: string;
  item: IItem;
  onClick?: () => void;
};

const ReportsCards: FC = () => {
  const { reportsData } = useContext(ReportsContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState([]);
  const [singleCardInfo, setSingleCardInfo] = useState({});
  const [id, setId] = useState<string>("");

  const handleCardClick = (id: string) => {
    setId(id);
    const lorem = reportsData.filter((item: IItem) => {
      return item?.agent_id === id;
    });
    setSingleCardInfo(lorem);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className={`grid grid-cols-4 gap-10`}>
        {reportsData?.map((item: IItem) => {
          return (
            <ReportsCard
              id={item?.agent_id}
              key={item?.agent_id}
              item={item}
              onClick={() => handleCardClick(item?.agent_id)}
            />
          );
        })}

        {isModalOpen ? (
          <ReportsCardModal
            singleCardInfo={singleCardInfo}
            modalData={modalData}
            setModalData={setModalData}
            setIsModalOpen={setIsModalOpen}
            id={id}
          />
        ) : (
          ""
        )}
        {isModalOpen ? <Curtain /> : ""}
      </div>
    </div>
  );
};

export default ReportsCards;
