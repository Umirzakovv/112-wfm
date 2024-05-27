"use client";

import { FC, createContext, useState } from "react";

interface IDashboardContext {
  fromDate: string;
  setFromDate: (value: string) => void;
  toDate: string;
  setToDate: (value: string) => void;
}

const defaultContextValue: IDashboardContext = {
  fromDate: "",
  setFromDate: () => {},
  toDate: "",
  setToDate: () => {},
};

export const DashboardContext =
  createContext<IDashboardContext>(defaultContextValue);

type DashboardContextType = {
  children: React.ReactNode;
};
const DashboardContextProvider: FC<DashboardContextType> = ({ children }) => {
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  return (
    <DashboardContext.Provider
      value={{ fromDate, setFromDate, toDate, setToDate }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
