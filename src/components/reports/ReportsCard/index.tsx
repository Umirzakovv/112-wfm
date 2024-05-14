import React, { FC } from "react";
import ReportsCardHeader from "../ReportsCardHeader";
import ReportsCardBody from "../ReportsCardBody";
import { CardType } from "../ReportsCards";

const ReportsCard: FC<CardType> = ({ item }) => {
  return (
    <div className="rounded-md shadow-lg bg-[#e1e6ef] dark:bg-[#464646] dark:shadow-lg">
      <ReportsCardHeader item={item} />
      <ReportsCardBody item={item} />
    </div>
  );
};

export default ReportsCard;
