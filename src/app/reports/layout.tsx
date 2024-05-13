import HeaderFilter from "@/components/reports/HeaderFilter";
import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import React, { FC } from "react";

type LayoutType = {
  children: React.ReactNode;
};

const ReportLayout: FC<LayoutType> = ({ children }) => {
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
