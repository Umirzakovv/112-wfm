import StatisiticsBtn from "../StatisticsBtn";

const StatisiticsBtns = () => {
  const btnData = [
    { id: 1, title: "В очереди", amount: "2500", color: "#ebecf7" },
    { id: 2, title: "В сети", amount: "2500", color: "#d6f4ed" },
    { id: 3, title: "В работе", amount: "2500", color: "#fff6d3" },
    { id: 4, title: "Свободные", amount: "2500", color: "#f4d6ee" },
    { id: 5, title: "Заблокированные", amount: "2500", color: "#f9c9c9" },
  ];

  return (
    <div className="grid gap-3">
      {btnData?.map((item) => {
        return (
          <StatisiticsBtn
            key={item?.id}
            title={item?.title}
            amount={item?.amount}
            color={item?.color}
          />
        );
      })}
    </div>
  );
};

export default StatisiticsBtns;
