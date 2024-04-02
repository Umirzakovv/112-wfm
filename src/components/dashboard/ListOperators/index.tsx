import { IData } from "@/utils/types-interfaces/dashboard";
import Image from "next/image";
import { FC } from "react";
import SingleListOperators from "../SingleListOperators";
import { switchTitle } from "@/utils/helpers/switchTitle";

type ListOperators = {
  data: [IData];
  typeOperators: string;
};

const ListOperators: FC<ListOperators> = ({ data, typeOperators }) => {
  return (
    <div className="bg-white rounded-lg p-5 w-max">
      <div className="flex justify-between items-center">
        <h6 className="text-lg font-bold text-main_blue">
          {switchTitle(typeOperators)}
        </h6>
        <Image src="/warning.svg" alt="warning icon" width={24} height={24} />
      </div>
      <div>
        {typeOperators === "default"
          ? ""
          : typeOperators === "Заблокированные"
          ? data[0]?.blockAgenst?.map((item, index) => {
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
          ? data[0]?.busyAgents?.map((item, index) => {
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
          ? data[0]?.freeAgents?.map((item, index) => {
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
              ...data[0]?.blockAgenst,
              ...data[0]?.busyAgents,
              ...data[0]?.freeAgents,
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
