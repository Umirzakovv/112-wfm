import Image from "next/image";
import { FC } from "react";
import LanguageSelect from "../Language";
import { useTheme } from "next-themes";

const UtilityBar: FC = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div className="flex gap-3">
      <LanguageSelect />

      <button onClick={() => setTheme(theme !== "dark" ? "dark" : "light")}>
        <Image
          src={theme !== "dark" ? "/moon.svg" : "/sun.svg"}
          alt="sun img"
          width={24}
          height={24}
        />
      </button>

      <button className="relative">
        <span className="absolute bottom-6 rounded-full text-xs bg-rose-500 p-0 w-[16px] text-white font-bold">
          2
        </span>
        <Image src={"/notification.svg"} alt="sun img" width={24} height={24} />
      </button>
    </div>
  );
};

export default UtilityBar;
