import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC } from "react";

const FilterByDayWeekMonth: FC = () => {
  return (
    <div>
      <Label>Выберите</Label>
      <Tabs>
        <TabsList>
          <TabsTrigger value="week">Неделя</TabsTrigger>
          <TabsTrigger value="month">Месяц</TabsTrigger>
          <TabsTrigger value="year">Год</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default FilterByDayWeekMonth;
