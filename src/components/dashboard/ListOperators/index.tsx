"use client";

import { IData } from "@/utils/types-interfaces/dashboard";
import Image from "next/image";
import { FC } from "react";
import SingleListOperators from "../SingleListOperators";
import { switchTitle } from "@/utils/helpers/switchTitle";

type ListOperators = {
  sidebarData: IData[];
  typeOperators: string;
};

const ListOperators: FC<ListOperators> = ({ sidebarData, typeOperators }) => {
  return (
    <div className="bg-white rounded-lg p-5 w-full h-[400px] overflow-auto dark:bg-main_grey">
      <div className="flex justify-between items-center mb-5">
        <h6 className="text-lg font-bold text-main_blue">
          {switchTitle(typeOperators)}
        </h6>
        <Image src="/warning.svg" alt="warning icon" width={24} height={24} />
      </div>
      <div>
        {typeOperators === "default"
          ? ""
          : typeOperators === "Заблокированные"
          ? sidebarData[0]?.blockAgenst?.map((item, index) => {
              return (
                <SingleListOperators
                  key={index}
                  lastName={item?.["ct:lastName"]}
                  firstName={item?.["ct:firstName"]}
                  secondName={item?.["ct:secondName"]}
                />
              );
            })
          : typeOperators === "В работе"
          ? sidebarData[0]?.busyAgents?.map((item, index) => {
              return (
                <SingleListOperators
                  key={index}
                  lastName={item?.["ct:lastName"]}
                  firstName={item?.["ct:firstName"]}
                  secondName={item?.["ct:secondName"]}
                />
              );
            })
          : typeOperators === "Свободные"
          ? sidebarData[0]?.freeAgents?.map((item, index) => {
              return (
                <SingleListOperators
                  key={index}
                  lastName={item?.["ct:lastName"]}
                  firstName={item?.["ct:firstName"]}
                  secondName={item?.["ct:secondName"]}
                />
              );
            })
          : typeOperators === "В сети"
          ? [
              ...sidebarData[0]?.blockAgenst,
              ...sidebarData[0]?.busyAgents,
              ...sidebarData[0]?.freeAgents,
            ]?.map((item, index) => {
              return (
                <SingleListOperators
                  key={index}
                  lastName={item?.["ct:lastName"]}
                  firstName={item?.["ct:firstName"]}
                  secondName={item?.["ct:secondName"]}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ListOperators;
