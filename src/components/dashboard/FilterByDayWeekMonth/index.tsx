import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FilterByDayWeekMonth = () => {
  return (
    <Tabs defaultValue="account" className="w-max">
      <p className="text-medium text-sm mb-2">Выберите</p>
      <TabsList>
        <TabsTrigger value="day">День</TabsTrigger>
        <TabsTrigger value="week">Неделя</TabsTrigger>
        <TabsTrigger value="month">Месяц</TabsTrigger>
        <TabsTrigger value="year">Год</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default FilterByDayWeekMonth;
