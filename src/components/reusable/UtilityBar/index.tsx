import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import Image from "next/image";
import { FC } from "react";

const UtilityBar: FC = () => {
  return (
    <div className="flex gap-3">
      <Select>
        <SelectTrigger className="w-max px-0 py-0 bg-main_blue border-0 text-white">
          <Image
            src={"/russian-flag.svg"}
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
                src={"/russian-flag.svg"}
                alt="sun img"
                width={24}
                height={24}
              />
            </SelectItem>
          </SelectGroup>
        </SelectContent>



      </Select>
      <button>
        <Image src={"/moon.svg"} alt="sun img" width={24} height={24} />
      </button>
      <button className="relative ">
        <span className="absolute bottom-6 rounded-full text-xs bg-rose-500 p-0 w-[16px] text-white font-bold">
          2
        </span>
        <Image src={"/notification.svg"} alt="sun img" width={24} height={24} />
      </button>
    </div>
  );
};

export default UtilityBar;
