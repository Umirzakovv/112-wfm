import React, { FC } from "react";
import "./styles.css";

type SpinnerType = {
  width?: string;
  height?: string;
  color?: string;
};

const Spinner: FC<SpinnerType> = ({ width, height, color }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="orbit-spinner"
        style={{
          width: width ? width : "55px",
          height: height ? height : "55px",
        }}
      >
        <div
          className="orbit"
          style={{
            borderBottomWidth: "3px",
            borderBottomColor: color ? color : "#4f46e5",
          }}
        ></div>
        <div
          className="orbit"
          style={{
            borderRightWidth: "3px",
            borderRightColor: color ? color : "#4f46e5",
          }}
        ></div>
        <div
          className="orbit"
          style={{
            borderTopWidth: "3px",
            borderTopColor: color ? color : "#4f46e5",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
