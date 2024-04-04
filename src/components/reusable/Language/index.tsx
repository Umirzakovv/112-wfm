import React, { FC, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";

const LanguageSelect: FC = () => {
  const [acitveLang, setActiveLang] = useState("ru");

  const handleLangChange = (e: string) => {
    setActiveLang(e === "ru" ? "ru" : "uz");
  };

  return (
    <Select value={acitveLang} onValueChange={handleLangChange}>
      <SelectTrigger className="w-max px-0 py-0 bg-main_blue border-0 text-white dark:bg-main_grey">
        <Image
          src={acitveLang === "ru" ? "/russian-flag.svg" : "/uzbek-flag.svg"}
          alt="sun img"
          width={24}
          height={24}
        />
      </SelectTrigger>
      <SelectContent className="min-w-[1rem]">
        <SelectGroup>
          <SelectItem value="ru">
            <Image
              src={"/russian-flag.svg"}
              alt="sun img"
              width={24}
              height={24}
            />
          </SelectItem>
          <SelectItem value="uz">
            <Image
              src={"/uzbek-flag.svg"}
              alt="sun img"
              width={24}
              height={24}
            />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelect;
