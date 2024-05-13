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
  const { selectValue, setSelectValue } = useContext(ReportsContext);

  console.log(selectValue);
  return (
    <div>
      <Label>Сортировка по статусу</Label>
      <Select>
        <SelectTrigger className="w-[236px]">
          <SelectValue placeholder="Выберите статус" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple">Превышение перерыва</SelectItem>
            <SelectItem value="banana">С перерыва в перерыв</SelectItem>
            <SelectItem value="blueberry">Опаздание</SelectItem>
            <SelectItem value="grapes">Ранний уход</SelectItem>
            <SelectItem value="pineapple">Поработал меньше 9 часов</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectByStatus;
