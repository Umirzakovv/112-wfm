import Header from "@/components/reusable/Header";
import MainContent from "@/components/reusable/MainContent";
import React, { FC } from "react";

type ScheduleLayoutType = {
  children: React.ReactNode;
};

const ScheduleLayout: FC<ScheduleLayoutType> = ({ children }) => {
  return (
    <div>
      <Header />
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default ScheduleLayout;
