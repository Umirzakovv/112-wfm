import Image from "next/image";
import React, { FC } from "react";
import { SidebarDataType } from "../Sidebar";
import { convertSeconds } from "@/utils/helpers/convertSeconds";

type SidebarCardType = {
  item: SidebarDataType;
};

const SidebarCard: FC<SidebarCardType> = ({ item }) => {
  return (
    <div className="shadow-lg rounded-md m-2">
      <div className="p-1 rounded-md flex justify-between items-center bg-[#ffdefc]">
        <div className="bg-white w-max h-max p-3 rounded-full">
          <Image src="/card-user.svg" alt="card user" width={19} height={19} />
        </div>
        <div>
          <h2 className="text-base font-bold">
            {item?.lastName} {item?.firstName}
          </h2>
          <p className="text-xs mt-3 text-[#8D99AF]">ID PMO: {item?.login}</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p></p>
            <div className="bg-white w-max p-2 rounded-full">
              <Image src="/card-alert.svg" alt="alert" width={13} height={13} />
            </div>
          </div>

          <p className="text-xs mt-3 text-[#8D99AF]">
            {item?.banInfo === "time"
              ? "Превышение перерыва"
              : "Переход блок на блок"}
          </p>
        </div>
      </div>

      <div className="flex mt-2 p-1">
        <Image src="/clock.svg" alt="clock" width={16} height={16} />
        <p className="text-sm ml-2 text-[#D733C8]">
          {convertSeconds(item?.agentStateDuration)}
        </p>
      </div>
    </div>
  );
};

export default SidebarCard;
