import HeaderFilter from "@/components/reports/HeaderFilter";
import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import React, { FC } from "react";

type ReportLayoutType = {
  children: React.ReactNode;
};

const ReportLayout: FC<ReportLayoutType> = ({ children }) => {
  return (
    <div>
      <Header>
        <HeaderFilter />
      </Header>
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default ReportLayout;
