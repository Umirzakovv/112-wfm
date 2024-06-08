"use client";

import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type EmployeeType = {
  IsBlockToBlock: boolean;
  IsOnlineToBlock: boolean;
  IsSupervazer: boolean;
  TgMsgId: string;
  TgMsgSentTime: string;
  addToblockTable: boolean;
  agentState: string;
  agentStateDuration: string;
  agent_id: string;
  create_data: string;
  firstName: string;
  id: string;
  lastAgentStateDuration: string;
  lastLockCause: string;
  lastName: string;
  lockCause: string;
  login: string;
  secondName: string;
};
interface IDatebaseContext {
  employees: EmployeeType[];
  setEmployees: Dispatch<SetStateAction<EmployeeType[]>>;
  employeesCopy: EmployeeType[];
  setEmployeesCopy: Dispatch<SetStateAction<EmployeeType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: IDatebaseContext = {
  employees: [],
  setEmployees: () => {},
  employeesCopy: [],
  setEmployeesCopy: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

export const DatebaseContext =
  createContext<IDatebaseContext>(defaultContextValue);

const DatebaseContextProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<EmployeeType[]>([]);
  const [employeesCopy, setEmployeesCopy] = useState<EmployeeType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <DatebaseContext.Provider
      value={{
        employees,
        setEmployees,
        employeesCopy,
        setEmployeesCopy,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DatebaseContext.Provider>
  );
};

export default DatebaseContextProvider;
