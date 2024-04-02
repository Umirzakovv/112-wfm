import { FC } from "react";

type BtnType = {
  title: string;
  amount: number | string;
  color: string;
};

const StatisiticsBtn: FC<BtnType> = ({ title, amount, color }) => {
  return (
    <button
      value={title}
      style={{ background: color }}
      className={`w-[343px] flex justify-between p-3 rounded-lg font-bold`}
    >
      {title} <span>{amount}</span>
    </button>
  );
};

export default StatisiticsBtn;
