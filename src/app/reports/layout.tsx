import HeaderFilter from "@/components/reports/HeaderFilter";
import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import ReportsContextProvider from "@/context/ReportsContext";
import React, { FC } from "react";

type LayoutType = {
  children: React.ReactNode;
};

const ReportLayout: FC<LayoutType> = ({ children }) => {
  return (
    <ReportsContextProvider>
      <Header>
        <HeaderFilter />
      </Header>
      <MainContent>{children}</MainContent>
    </ReportsContextProvider>
  );
};

export default ReportLayout;
