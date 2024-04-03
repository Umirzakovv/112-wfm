import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";

const LanguageSelect: FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-max px-0 py-0 bg-main_blue border-0 text-white">
        <Image src={"/russian-flag.svg"} alt="sun img" width={24} height={24} />
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
              src={"/russian-flag.svg"}
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
