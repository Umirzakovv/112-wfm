import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReportsCardModalStats from "../ReportsCardModalStats";
import ReportsCardModalTable from "../ReportsCardModalTable";
import ReportsCardModalHeader from "../ReportsCardModalHeader";
import { ReportsContext } from "@/context/ReportsContext";
import { correctDate } from "@/utils/helpers/correctDate";
import { switchStatuses } from "@/utils/helpers/switchStatuses";
import { IItem } from "../ReportsCards";

export interface ISingleModalData {
  ComeToWorkOnTime: boolean;
  FullDurationOfWork: string;
  LastLoginTime: string;
  LeftAfterWork: boolean;
  PauseDuration: string;
  TimeEndWork: string;
  TimeWorkDuration: string;
  TimeWorkIsDone: boolean;
  TimeWorked: string;
  WorkState: null;
  agent_id: string;
  create_data: string;
  id: string;
  id_login: string;
  id_login_type_number: number;
  name: string;
  timeWork: string;
  typeWork: string;
  update_data: string;
  banInfo: string;
  agentStateDuration: string;
  lastAgentStateDuration: string;
}

type ModalType = {
  singleCardInfo: IItem[];
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
};

const ReportsCardModal: FC<ModalType> = ({
  setIsModalOpen,
  singleCardInfo,
  id,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { fromDate } = useContext(ReportsContext);
  const { toDate } = useContext(ReportsContext);
  const [cardModalDataType, seTCardModalDataType] = useState("all");
  const [modalData, setModalData] = useState<ISingleModalData[]>([]);

  const correctedFromDate = correctDate(fromDate);
  const correctedToDate = correctDate(toDate);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    console.log(id);
    
    const fetchData = async () => {
      try {
        const response1 = await fetch(
          `http://192.168.42.176:1000/api/v1/agents/findLockData?agent_id=${id}&type_block=all&pageNumber=1&pageSize=100&fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
        );
        if (!response1.ok) {
          throw new Error(`HTTP error! status: ${response1.status}`);
        }
        const result1 = await response1.json();

        const response2 = await fetch(
          `http://192.168.42.176:1000/api/v1/agents/findControlTgraphData?agent_id=${id}&type_ban=all&pageNumber=1&pageSize=100&fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
        );
        if (!response2.ok) {
          throw new Error(`HTTP error! status: ${response2.status}`);
        }
        const result2 = await response2.json();
        
        setModalData([...result1?.data?.results, ...result2?.data?.results]);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSecondData = async () => {
      try {
        const response = await fetch(
          cardModalDataType === "exceeding-time" ||
            cardModalDataType === "block-to-block"
            ? `http://192.168.42.176:1000/api/v1/agents/findLockData?agent_id=${id}&type_block=${
                cardModalDataType === "exceeding-time" ? "time" : "block"
              }&pageNumber=1&pageSize=100&fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
            : `http://192.168.42.176:1000/api/v1/agents/findControlTgraphData?agent_id=${id}&type_ban=${switchStatuses(
                cardModalDataType
              )}&pageNumber=1&pageSize=100&fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setModalData(result?.data?.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (cardModalDataType === "all") {
      fetchData();
    } else {
      fetchSecondData();
    }
  }, [cardModalDataType]);

  return (
    <div
      ref={modalRef}
      className="bg-white w-[1600px] h-[800px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-lg shadow-lg border overflow-y-scroll	 dark:bg-main_dark "
    >
      <ReportsCardModalHeader singleCardInfo={singleCardInfo} />
      <ReportsCardModalStats
        cardModalDataType={cardModalDataType}
        singleCardInfo={singleCardInfo}
        seTCardModalDataType={seTCardModalDataType}
      />
      <ReportsCardModalTable
        modalData={modalData}
        // setModalData={setModalData}
        cardModalDataType={cardModalDataType}
      />
    </div>
  );
};

export default ReportsCardModal;
