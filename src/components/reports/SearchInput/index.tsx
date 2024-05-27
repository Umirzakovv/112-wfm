"use client";

import React, { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReportsContext } from "@/context/ReportsContext";
import { correctDate } from "@/utils/helpers/correctDate";

const SearchInput: FC = () => {
  const { fromDate } = useContext(ReportsContext);
  const { toDate } = useContext(ReportsContext);
  const { reportStatus } = useContext(ReportsContext);

  const { setReportsData } = useContext(ReportsContext);
  const [inputValue, setInputValue] = useState<string>("");

  const swtichReportStatus = function () {
    switch (reportStatus) {
      case "exceeding-break":
        return "findallBanTimeData";
      case "block-to-block":
        return "findallBanBlockData";
      case "latecomers":
        return "findComeToWorkOnTimeData";
      case "left-early":
        return "findLeftAfterWorkData";
      case "work-less-nine-hours":
        return "findallworkedLess";
    }
  };

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.42.176:1000/api/v1/agents/${swtichReportStatus()}?login=${
            inputValue && !isNaN(Number(inputValue)) ? inputValue : null
          }&fullname=${
            inputValue && isNaN(Number(inputValue)) ? inputValue.trim() : null
          }&fromDate=${correctDate(fromDate)}&untilDate=${correctDate(toDate)}`
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
    <form
      className="grid max-w-sm items-center gap-1.5"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <Label htmlFor="text">Поиск по фамилия или ID РМО</Label>
      <Input
        type="text"
        id="text"
        placeholder="Фамилия с большой буквы"
        value={inputValue}
        onChange={(e) => onValueChange(e)}
      />
    </form>
  );
};

export default SearchInput;
