import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";
import { SubHeaderType } from "../ReportsCardModalSubHeader";

const ReportsCardModalTab: FC<SubHeaderType> = ({ setDataType }) => {
  return (
    <Tabs defaultValue="first" className="w-[800px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="first" onClick={() => setDataType("first")}>
          Превышений перерывов и переходов блок на блок
        </TabsTrigger>
        <TabsTrigger value="second" onClick={() => setDataType("second")}>
          Опаздании, ранние уходы и неявки
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ReportsCardModalTab;
