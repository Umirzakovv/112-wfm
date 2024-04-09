import React, { FC } from "react";
import ReportsCardHeader from "../ReportsCardHeader";
import ReportsCardBody from "../ReportsCardBody";

const ReportsCard: FC = () => {
  return (
    <div className="rounded-md shadow-lg">
      <ReportsCardHeader />
      <ReportsCardBody />
    </div>
  );
};

export default ReportsCard;
