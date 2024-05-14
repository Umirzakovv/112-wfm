"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReportsContext } from "@/context/ReportsContext";
import { correctDate } from "@/utils/helpers/correctDate";
import { FC, useContext } from "react";

interface Data {
  id: number;
  name: string;
}

const SelectByStatus: FC = () => {
  const { reportStatus, setReportStatus } = useContext(ReportsContext);
  const { setReportsData } = useContext(ReportsContext);
  const { fromDate, setFromDate } = useContext(ReportsContext);
  const { toDate, setToDate } = useContext(ReportsContext);

  const onValueChange = (event: string) => {
    setReportStatus(event);
    const correctedFromDate = correctDate(fromDate);
    const correctedToDate = correctDate(toDate);

    const fetchData = async () => {
      try {
        const response = await fetch(
          event === "exceeding-break"
            ? `http://192.168.42.176:1000/api/v1/agents/findallBanTimeData?fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
            : event === "block-to-block"
            ? `http://192.168.42.176:1000/api/v1/agents/findallBanBlockData?fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
            : event === "latecomers"
            ? `http://192.168.42.176:1000/api/v1/agents/findComeToWorkOnTimeData?fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
            : event === "left-early"
            ? `http://192.168.42.176:1000/api/v1/agents/findLeftAfterWorkData?fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
            : event === "work-less-nine-hours"
            ? `http://192.168.42.176:1000/api/v1/agents/findallworkedLess?fromDate=${correctedFromDate}&untilDate=${correctedToDate}`
            : ""
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setReportsData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  };

  return (
    <div>
      <Label>Сортировка по статусу</Label>
      <Select
        value={reportStatus}
        onValueChange={(event) => onValueChange(event)}
      >
        <SelectTrigger className="w-[236px]">
          <SelectValue placeholder="Выберите статус" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectItem value="all">Все нарушений</SelectItem> */}
            <SelectItem value="exceeding-break">Превышение перерыва</SelectItem>
            <SelectItem value="block-to-block">С перерыва в перерыв</SelectItem>
            <SelectItem value="latecomers">Опаздание</SelectItem>
            <SelectItem value="left-early">Ранний уход</SelectItem>
            <SelectItem value="work-less-nine-hours">
              Поработал меньше 9 часов
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectByStatus;
