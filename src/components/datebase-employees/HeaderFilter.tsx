"use client";

import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DatebaseContext, EmployeeType } from "@/context/DatebaseContext";

const HeaderFilter = () => {
  const { isLoading, setIsLoading } = useContext(DatebaseContext);
  const { employees, setEmployees } = useContext(DatebaseContext);
  const { employeesCopy, setEmployeesCopy } = useContext(DatebaseContext);

  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e?.target?.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (inputValue.trim() === "") {
      setEmployeesCopy(employees);
      setIsLoading(false);
    } else if (isNaN(Number(inputValue))) {
      const filteredData: EmployeeType[] = employees?.filter(
        (item: EmployeeType) => {
          return (
            item?.lastName
              .toLowerCase()
              .includes(inputValue.toLowerCase().trim()) ||
            item?.firstName
              .toLowerCase()
              .includes(inputValue.toLowerCase().trim()) ||
            item?.secondName
              .toLowerCase()
              .includes(inputValue.toLowerCase().trim())
          );
        }
      );
      setEmployeesCopy(filteredData);
      setIsLoading(false);
    } else if (!isNaN(Number(inputValue))) {
      const filteredData: EmployeeType[] = employees?.filter((item) => {
        return +item?.login === +inputValue;
      });
      setEmployeesCopy(filteredData);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-5 bg-main_blue rounded-md dark:bg-[#3a3a3a]">
      <div className="flex justify-between w-full p-2 bg-white rounded-md dark:bg-[#424242] dark:shadow-lg">
        <form
          className="grid max-w-sm items-center gap-1.5"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <Label htmlFor="text">Поиск по фамилия или ID РМО</Label>
          <Input
            type="text"
            id="text"
            placeholder="Поиск"
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
          />
        </form>
      </div>
    </div>
  );
};

export default HeaderFilter;
