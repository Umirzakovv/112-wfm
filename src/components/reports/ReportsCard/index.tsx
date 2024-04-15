import React, { FC } from "react";
import ReportsCardHeader from "../ReportsCardHeader";
import ReportsCardBody from "../ReportsCardBody";

interface IItem {
  title: string;
}

type CardType = {
  item: IItem;
};

const ReportsCard: FC<CardType> = ({ item }) => {
  return (
    <div className="rounded-md shadow-lg">
      <ReportsCardHeader />
      <ReportsCardBody />
    </div>
  );
};

export default ReportsCard;
