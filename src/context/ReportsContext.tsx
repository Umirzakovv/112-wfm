"use client";

import React, { FC, createContext, useState } from "react";

interface IReportsContext {
  reportStatus: string;
  setReportStatus: (value: string) => void;
}

type ReportsContextType = {
  children: React.ReactNode;
};

const defaultContextValue: IReportsContext = {
  reportStatus: "",
  setReportStatus: () => {}, // no-op function
};

export const ReportsContext =
  createContext<IReportsContext>(defaultContextValue);

const ReportsContextProvider: FC<ReportsContextType> = ({ children }) => {
  const [reportStatus, setReportStatus] = useState<string>("all");

  return (
    <ReportsContext.Provider value={{ reportStatus, setReportStatus }}>
      {children}
    </ReportsContext.Provider>
  );
};

export default ReportsContextProvider;
