"use client";

import React, { FC, useState } from "react";
import Sidebar from "../Sidebar";
import Container from "../Container";

type MainContentType = {
  children: React.ReactNode;
};

const MainContent: FC<MainContentType> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleBtnClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container className="border flex justify-between mt-5">
      <div className="w-full">
        {/* <button onClick={handleBtnClick}>click me to open sidebar</button> */}
        {children}
      </div>
      <Sidebar className={isSidebarOpen ? "open" : "close"} />
    </Container>
  );
};

export default MainContent;
