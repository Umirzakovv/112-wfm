import { useState } from "react";
import MapUzb from "../MapUzb";
import FilterByRegion from "../FilterByRegion";

const MapCard = () => {
  const [activeRegion, setActiveRegion] = useState("");
  console.log(activeRegion);
  

  return (
    <div className="bg-white flex justify-between px-20 py-5 rounded-md dark:bg-main_grey">
      <MapUzb activeRegion={activeRegion} setActiveRegion={setActiveRegion} />
      <FilterByRegion
        activeRegion={activeRegion}
        setActiveRegion={setActiveRegion}
      />
    </div>
  );
};

export default MapCard;
