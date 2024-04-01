import Image from "next/image";
import React from "react";

const ListOperators = () => {
  return (
    <div>
      <div>
        <h6>Заблокированные операторы</h6>
        <Image src="/warning.svg" alt="warning icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default ListOperators;
