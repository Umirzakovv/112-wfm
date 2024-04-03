import { mapData } from "@/consts/map-uzb-data";
import React, { FC, MouseEvent, useState } from "react";

const MapUzb: FC = () => {
  const [activeRegion, setActiveRegion] = useState("");

  const handleClick = (e: MouseEvent<SVGPathElement>) => {
    setActiveRegion(e?.currentTarget?.id);
    console.log(activeRegion);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 793 517"
      aria-label="Map of Uzbekistan"
      width="460px"
    >
      {mapData?.map((item) => {
        return (
          <path
            key={item?.d}
            id={item?.pathId}
            name={item?.name}
            d={item?.d}
            className={`map-path ${
              activeRegion == item?.pathId ? "map-path_active" : ""
            }`}
            onClick={(e) => handleClick(e)}
          />
        );
      })}
    </svg>
  );
};

export default MapUzb;
