import { mapData } from "@/consts/map-uzb-data";
import React, { Dispatch, FC, MouseEvent, SetStateAction } from "react";

type MapUzbType = {
  activeRegion: string;
  setActiveRegion: Dispatch<SetStateAction<string>>;
};

const MapUzb: FC<MapUzbType> = ({ activeRegion, setActiveRegion }) => {
  const handleClick = (e: MouseEvent<SVGPathElement>) => {
    setActiveRegion(e?.currentTarget?.id);
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
            className={`${
              activeRegion == item?.pathId ? "map-path_active" : ""
            } map-path`}
            onClick={(e) => handleClick(e)}
          >
            <title>{item?.name}</title>
          </path>
        );
      })}
    </svg>
  );
};

export default MapUzb;
