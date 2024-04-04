import { FC } from "react";

type SideBarType = {
  className?: string;
};

const Sidebar: FC<SideBarType> = ({ className }) => {
  return (
    <div
      className={`${className} transition-all duration-200 ease-linear overflow-hidden ml-5 rounded-t-md rounded-b-md bg-white`}
    >
      Sidebar
    </div>
  );
};

export default Sidebar;
