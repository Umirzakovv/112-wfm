/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useContext, useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import { DatebaseContext, EmployeeType } from "@/context/DatebaseContext";
import Spinner from "../reusable/Spinner";

export function EmployeesTable() {
  const url = "http://192.168.42.176:1000/api/v1/agents/agents/all";
  const { isLoading, setIsLoading } = useContext(DatebaseContext);
  const { employees, setEmployees } = useContext(DatebaseContext);
  const { employeesCopy, setEmployeesCopy } = useContext(DatebaseContext);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setEmployees(result);
      setEmployeesCopy(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSwitchChange = (e: boolean, id: string) => {
    const patchData = async () => {
      try {
        const response = await fetch(
          `http://192.168.42.176:1000/api/v1/agents/updateAgentSupervazer/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: e }),
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      } finally {
        fetchData();
      }
    };
    patchData();
  };

  return isLoading ? (
    <Spinner width="55px" height="55px" />
  ) : (
    <Table className="bg-white rounded-md">
      <TableHeader>
        <TableRow className="text-center">
          <TableHead className="w-[100px]">№</TableHead>
          <TableHead>ФИО</TableHead>
          <TableHead>ID РМО</TableHead>

          <TableHead className="text-center">Супервайзер</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employeesCopy.map((item: EmployeeType, index: number) => (
          <TableRow key={item?.agent_id}>
            <TableCell className="font-medium">{index + 1}</TableCell>

            <TableCell className="font-medium">
              {item?.lastName} {item?.firstName} {item?.secondName}
            </TableCell>
            <TableCell>{item?.login}</TableCell>

            <TableCell>
              <Switch
                className="block mx-auto my-0"
                checked={item?.IsSupervazer}
                onCheckedChange={(e) => handleSwitchChange(e, item?.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
