import React, { FC } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SearchInput:FC = () => {
  return (
    <div className="grid max-w-sm items-center gap-1.5">
      <Label htmlFor="text">
        Email
      </Label>
      <Input type="text" id="text" placeholder="Поиск по ФИО или ID РМО" />
    </div>
  );
};

export default SearchInput;
