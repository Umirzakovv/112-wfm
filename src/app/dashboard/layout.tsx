"use client"

import HeaderFilter from "@/components/dashboard/HeaderFilter";
import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import { FC, ReactNode } from "react";

type DashboardLayoutType = {
  children: ReactNode;
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
