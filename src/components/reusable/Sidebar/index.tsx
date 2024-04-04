import { FC } from "react";
import SidebarCard from "../SidebarCard";

type SideBarType = {
  className?: string;
};

const Sidebar: FC<SideBarType> = ({ className }) => {
  return (
    <div
      className={`${className} transition-all duration-200 ease-linear overflow-hidden ml-5 rounded-t-md rounded-b-md bg-white`}
    >
      <h6 className="text-center mt-2 font-semibold">Список нарушений </h6>
      <SidebarCard />
    </div>
  );
};

export default Sidebar;
