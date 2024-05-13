"use client";

import React, { FC, createContext, useState } from "react";

interface IReportsContext {
  selectValue: string;
  setSelectValue: (value: string) => void;
}

type ReportsContextType = {
  children: React.ReactNode;
};

const defaultContextValue: IReportsContext = {
  selectValue: "",
  setSelectValue: () => {}, // no-op function
};

export const ReportsContext =
  createContext<IReportsContext>(defaultContextValue);

const ReportsContextProvider: FC<ReportsContextType> = ({ children }) => {
  const [selectValue, setSelectValue] = useState<string>("");
  return (
    <ReportsContext.Provider value={{ selectValue, setSelectValue }}>
      {children}
    </ReportsContext.Provider>
  );
};

export default ReportsContextProvider;
