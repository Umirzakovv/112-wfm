import Image from "next/image";
import React, { FC } from "react";

type SingleInfoType = {
  imgSrc: string;
  title: string;
  amount: string;
  color: string;
  bgColor?: string;
};

const ReportsCardBodySingleInfo: FC<SingleInfoType> = ({
  imgSrc,
  title,
  amount,
  color,
  bgColor,
}) => {
  return (
    <div
      style={{ color }}
      className={`flex justify-between items-center p-4 bg-[${
        bgColor ? bgColor : ""
      }] dark:bg-${bgColor ? "main_dark" : "main_grey"}`}
    >
      <div className="flex">
        <Image src={imgSrc} alt="warning" width={20} height={20} />
        <p className="ml-2">{title}</p>
      </div>
      <p>{amount}</p>
    </div>
  );
};

export default ReportsCardBodySingleInfo;
