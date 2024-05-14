import React, { FC } from "react";
import ReportsCardHeader from "../ReportsCardHeader";
import ReportsCardBody from "../ReportsCardBody";
import { CardType } from "../ReportsCards";

const ReportsCard: FC<CardType> = ({ item }) => {
  return (
    <div className="rounded-md shadow-lg">
      <ReportsCardHeader item={item} />
      <ReportsCardBody item={item}/>
    </div>
  );
};

export default ReportsCard;
