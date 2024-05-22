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
import ReportsCardModalSubHeader from "../ReportsCardModalSubHeader";
import { ReportsContext } from "@/context/ReportsContext";
import { correctDate } from "@/utils/helpers/correctDate";

type ModalType = {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  modalData: {};
  setModalData: Dispatch<SetStateAction<string>>;
  singleCardInfo: {};
  id: string;
};

const ReportsCardModal: FC<ModalType> = ({
  setIsModalOpen,
  modalData,
  setModalData,
  singleCardInfo,
  id,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [dataType, setDataType] = useState("first");
  const { fromDate } = useContext(ReportsContext);
  const { toDate } = useContext(ReportsContext);

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
    const fetchData = async () => {
      try {
        const response = await fetch(
          dataType === "second"
            ? `http://192.168.42.176:1000/api/v1/agents/findControlTgraphData?agent_id=${id}&pageNumber=1&pageSize=10&fromDate=${correctDate(
                fromDate
              )}&untilDate=${correctDate(toDate)}`
            : `http://192.168.42.176:1000/api/v1/agents/findLockData?agent_id=${id}&pageNumber=1&pageSize=10&fromDate=${correctDate(
                fromDate
              )}&untilDate=${correctDate(toDate)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();


        setModalData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div
      ref={modalRef}
      className="bg-white w-[1600px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-5 rounded-lg shadow-lg border dark:bg-main_dark grid gap-5"
    >
      <ReportsCardModalHeader singleCardInfo={singleCardInfo} />
      <ReportsCardModalStats singleCardInfo={singleCardInfo} />
      <ReportsCardModalSubHeader setDataType={setDataType} />
      <ReportsCardModalTable dataType={dataType} modalData={modalData} />
    </div>
  );
};

export default ReportsCardModal;
