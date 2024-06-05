import HeaderFilter from "@/components/dashboard/HeaderFilter";
import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import { DashboardContext } from "@/context/DashboardContext";
import React, { FC, useContext } from "react";

type DashboardLayoutType = {
  children: React.ReactNode;
};

const DashboardLayout: FC<DashboardLayoutType> = ({ children }) => {
  return (
    <div>
      <Header>
        <HeaderFilter />
      </Header>
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default DashboardLayout;
