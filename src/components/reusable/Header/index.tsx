"use client";
import React, { FC, Fragment } from "react";
import Navbar from "../Navbar";
import UtilityBar from "../UtilityBar";
import Container from "../Container";

type HeaderType = {
  children?: React.ReactNode;
};

const Header: FC<HeaderType> = ({ children }) => {
  return (
    <div className="bg-main_blue">
      <header>
        <Container className="border flex items-center justify-between">
          <Navbar />
          <UtilityBar />
        </Container>
      </header>
      <Container>
        <div>{children}</div>
      </Container>
    </div>
  );
};

export default Header;
