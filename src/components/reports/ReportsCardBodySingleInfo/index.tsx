import Image from "next/image";
import React, { FC } from "react";

type SingleInfoType = {
  imgSrc: string;
  title: string;
  amount: number | string;
  color: string;
};

const ReportsCardBodySingleInfo: FC<SingleInfoType> = ({
  imgSrc,
  title,
  amount,
  color,
}) => {
  return (
    <div style={{ color }} className={`flex justify-between items-center p-4`}>
      <div className="flex">
        <Image
          src={imgSrc}
          alt="warning icon"
          width={20}
          height={20}
          className="w-[20px] h-[20px]"
        />
        <p className="ml-2">{title}</p>
      </div>
      <p>{amount}</p>
    </div>
  );
};

export default ReportsCardBodySingleInfo;
