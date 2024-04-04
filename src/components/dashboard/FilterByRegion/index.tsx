import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions } from "@/consts/regions";
import { Dispatch, FC, SetStateAction } from "react";

type FilterByRegionType = {
  activeRegion: string;
  setActiveRegion: Dispatch<SetStateAction<string>>;
};

const FilterByRegion: FC<FilterByRegionType> = ({
  activeRegion,
  setActiveRegion,
}) => {
  const handleRegionChange = (selectedValue: string) => {
    setActiveRegion(selectedValue);
  };

  return (
    <Select value={activeRegion} onValueChange={handleRegionChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Выберите регион" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {regions?.map((item) => {
            return (
              <SelectItem key={item?.id} value={item?.pathId}>
                {item?.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterByRegion;
