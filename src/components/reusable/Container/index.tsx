import React, { FC } from "react";

type ContainerType = {
  className?: string;
  children?: React.ReactNode;
};

const Container: FC<ContainerType> = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1800px] block my-0 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
