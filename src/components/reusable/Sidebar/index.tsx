import React, { FC } from "react";

type SideBarType = {
  className?: string;
};

const Sidebar: FC<SideBarType> = ({ className }) => {
  return (
    <div className={`${className} sidebar border`}>
      Sidebar
    </div>
  );
};

export default Sidebar;
