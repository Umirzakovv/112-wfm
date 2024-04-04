"use client";

import { FC, ReactNode, createContext, useState } from "react";

interface MainContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

const defaultContextValue: MainContextType = {
  isSidebarOpen: false,
  setIsSidebarOpen: () => {},
};

export const MainContext = createContext<MainContextType>(defaultContextValue);

const MainContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const value = { isSidebarOpen, setIsSidebarOpen };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainContextProvider;
