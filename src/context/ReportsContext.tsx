"use client";

import React, { FC, createContext, useState } from "react";

interface IReportsContext {
  reportStatus: string;
  setReportStatus: (value: string) => void;
  reportsData: [];
  setReportsData: (value: []) => void;
  fromDate: string;
  setFromDate: (value: string) => void;
  toDate: string;
  setToDate: (value: string) => void;
}

type ReportsContextType = {
  children: React.ReactNode;
};

const defaultContextValue: IReportsContext = {
  reportStatus: "",
  setReportStatus: () => {},
  reportsData: [],
  setReportsData: () => {},
  fromDate: "",
  setFromDate: () => {},
  toDate: "",
  setToDate: () => {},
};

export const ReportsContext =
  createContext<IReportsContext>(defaultContextValue);

const ReportsContextProvider: FC<ReportsContextType> = ({ children }) => {
  const [reportStatus, setReportStatus] = useState<string>("all");
  const [reportsData, setReportsData] = useState<[]>([]);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  return (
    <ReportsContext.Provider
      value={{
        reportStatus,
        setReportStatus,
        reportsData,
        setReportsData,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
      }}
    >
      {children}
    </ReportsContext.Provider>
  );
};

export default ReportsContextProvider;
