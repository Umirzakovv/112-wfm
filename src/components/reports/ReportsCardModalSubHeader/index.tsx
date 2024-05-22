import React, { Dispatch, FC, SetStateAction } from "react";
import ReportsCardModalTab from "../ReportsCardModalTab";

export type SubHeaderType = {
  setDataType: Dispatch<SetStateAction<string>>;
};

const ReportsCardModalSubHeader: FC<SubHeaderType> = ({ setDataType }) => {
  return (
    <div className="flex justify-center items-center">
      <ReportsCardModalTab setDataType={setDataType} />
    </div>
  );
};

export default ReportsCardModalSubHeader;
