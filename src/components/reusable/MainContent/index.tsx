"use client";

import React, { FC, useContext, useState } from "react";
import Sidebar from "../Sidebar";
import Container from "../Container";
import { MainContext } from "@/context";

type MainContentType = {
  children: React.ReactNode;
};

const MainContent: FC<MainContentType> = ({ children }) => {
  const { isSidebarOpen } = useContext(MainContext);

  return (
    <Container className="flex justify-between mt-5">
      <div className="w-full">{children}</div>
      <Sidebar className={isSidebarOpen ? "open" : "close"} />
    </Container>
  );
};

export default MainContent;
