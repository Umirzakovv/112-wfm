import { useTheme } from "next-themes";
import { FC, MouseEvent } from "react";

type BtnType = {
  title: string;
  amount: number | string;
  color: string;
  darkColor: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const StatisiticsBtn: FC<BtnType> = ({
  title,
  amount,
  color,
  darkColor,
  onClick,
}) => {
  const { theme } = useTheme();

  return (
    <button
      value={title}
      style={{ background: theme === "light" ? color : darkColor }}
      className={`w-[50px] flex justify-between p-3 rounded-lg font-bold`}
      onClick={onClick}
    >
      {title} <span>{amount}</span>
    </button>
  );
};

export default StatisiticsBtn;
