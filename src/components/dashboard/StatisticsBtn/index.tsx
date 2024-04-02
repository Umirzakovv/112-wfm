import { FC, HtmlHTMLAttributes, MouseEvent } from "react";

type BtnType = {
  title: string;
  amount: number | string;
  color: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const StatisiticsBtn: FC<BtnType> = ({ title, amount, color, onClick }) => {
  return (
    <button
      value={title}
      style={{ background: color }}
      className={`w-[343px] flex justify-between p-3 rounded-lg font-bold`}
      onClick={onClick}
    >
      {title} <span>{amount}</span>
    </button>
  );
};

export default StatisiticsBtn;
