import HeaderFilter from "@/components/datebase-employees/HeaderFilter";
import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import DatebaseContextProvider from "@/context/DatebaseContext";
import React, { FC, ReactNode } from "react";

type DatebaseEmployeesLayoutType = {
  children: ReactNode;
};

const DatebaseEmployeesLayout: FC<DatebaseEmployeesLayoutType> = ({
  children,
}) => {
  return (
    <DatebaseContextProvider>
      <Header>
        <HeaderFilter />
      </Header>
      <MainContent>{children}</MainContent>
    </DatebaseContextProvider>
  );
};

export default DatebaseEmployeesLayout;
