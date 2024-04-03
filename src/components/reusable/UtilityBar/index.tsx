
import Image from "next/image";
import { FC } from "react";
import LanguageSelect from "../Language";

const UtilityBar: FC = () => {
  const handleNotifClick = () => {
    
  }
  return (
    <div className="flex gap-3">
      <LanguageSelect />
      <button>
        <Image src={"/moon.svg"} alt="sun img" width={24} height={24} />
      </button>
      <button className="relative" onClick={handleNotifClick}>
        <span className="absolute bottom-6 rounded-full text-xs bg-rose-500 p-0 w-[16px] text-white font-bold">
          2
        </span>
        <Image src={"/notification.svg"} alt="sun img" width={24} height={24} />
      </button>
    </div>
  );
};

export default UtilityBar;
