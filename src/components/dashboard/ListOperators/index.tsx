import Image from "next/image";
import React from "react";

const ListOperators = () => {
  return (
    <div className="bg-[#d6f4ed] rounded-lg w-[620px] p-5">
      <div className="flex justify-between items-center">
        <h6 className="text-xl text-[#23DBC5] font-medium">
          Заблокированные операторы
        </h6>
        <Image src="/warning.svg" alt="warning icon" width={24} height={24} />
      </div>
      <div>
        <p className="text-lg text-[#8D99AF]">Азизов Азиз Азизов</p>
      </div>
    </div>
  );
};

export default ListOperators;
