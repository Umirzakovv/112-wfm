import Image from "next/image";
import { FC, useContext } from "react";
import LanguageSelect from "../Language";
import { useTheme } from "next-themes";
import { MainContext } from "@/context";
import { DashboardContext } from "@/context/DashboardContext";

const UtilityBar: FC = () => {
  const { theme, setTheme } = useTheme();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MainContext);
  const { notifcationData } = useContext(DashboardContext);

  const handleBtnClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex gap-3">
      {/* <LanguageSelect /> */}

      <button onClick={() => setTheme(theme !== "dark" ? "dark" : "light")}>
        <Image
          src={theme !== "dark" ? "/moon.svg" : "/sun.svg"}
          alt="sun img"
          width={24}
          height={24}
        />
      </button>

      <button className="relative" onClick={handleBtnClick}>
        <span className="absolute bottom-4 rounded-full text-xs bg-rose-500 p-0 w-[16px] text-white font-bold">
          {notifcationData?.length === 0 ? "" : notifcationData?.length}
        </span>
        <Image src={"/notification.svg"} alt="sun img" width={24} height={24} />
      </button>
    </div>
  );
};

export default UtilityBar;
