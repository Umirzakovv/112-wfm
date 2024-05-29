import React from "react";
import "./styles.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="orbit-spinner">
        <div className="orbit"></div>
        <div className="orbit"></div>
        <div className="orbit"></div>
      </div>
    </div>
  );
};

export default Spinner;
