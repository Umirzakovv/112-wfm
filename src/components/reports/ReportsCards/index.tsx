"use client";

import { FC } from "react";
import ReportsCard from "../ReportsCard";

const data = [
  {
    id: 1,
    title: "lorem",
  },
  {
    id: 2,
    title: "lorem",
  },
  {
    id: 3,
    title: "lorem",
  },
  {
    id: 4,
    title: "lorem",
  },
  {
    id: 5,
    title: "lorem",
  },
  {
    id: 6,
    title: "lorem",
  },
  {
    id: 7,
    title: "lorem",
  },
  {
    id: 8,
    title: "lorem",
  },
  {
    id: 9,
    title: "lorem",
  },
];

const ReportsCards: FC = () => {
  // const [columns, setColumns] = useState<number>(2);
  // console.log(columns);

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "+") {
  //       setColumns((columns) => (columns += 1));
  //     } else if (event.key === "-") {
  //       setColumns((columns) => (columns -= 1));
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div>
      <div className={`grid grid-cols-2 gap-10`}>
        {data?.map((item) => {
          return <ReportsCard key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ReportsCards;
