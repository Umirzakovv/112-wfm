"use client";

import { FC, createContext, useState } from "react";

interface IDashboardContext {
  fromDate: string;
  setFromDate: (value: string) => void;
  toDate: string;
  setToDate: (value: string) => void;
  sidebarData: [];
  setSidebarData: (value: []) => void;
  notifcationData: [];
  setNotifcationData: (value: []) => void;
}

const defaultContextValue: IDashboardContext = {
  fromDate: "",
  setFromDate: () => {},
  toDate: "",
  setToDate: () => {},
  sidebarData: [],
  setSidebarData: () => {},
  notifcationData: [],
  setNotifcationData: () => {},
};

export const DashboardContext =
  createContext<IDashboardContext>(defaultContextValue);

type DashboardContextType = {
  children: React.ReactNode;
};
const DashboardContextProvider: FC<DashboardContextType> = ({ children }) => {
  const [sidebarData, setSidebarData] = useState<[]>([]);
  const [notifcationData, setNotifcationData] = useState<[]>([]);

  const [fromDate, setFromDate] = useState<string>(String(new Date()));
  const [toDate, setToDate] = useState<string>(String(new Date()));

  return (
    <DashboardContext.Provider
      value={{
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        sidebarData,
        setSidebarData,
        notifcationData,
        setNotifcationData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
