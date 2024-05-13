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
import { FC, useContext } from "react";

const SelectByStatus: FC = () => {
  const { reportStatus, setReportStatus } = useContext(ReportsContext);

  const onValueChange = (event: string) => {
    setReportStatus(event);
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
            <SelectItem value="all">Все нарушений</SelectItem>
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
