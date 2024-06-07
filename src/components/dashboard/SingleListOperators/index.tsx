import { FC } from "react";

type OperatorsType = {
  lastName: string[];
  firstName: string[];
  secondName: string[];
  index?: number;
};

const SingleListOperators: FC<OperatorsType> = ({
  lastName,
  firstName,
  secondName,
  index,
}) => {
  console.log(index);

  return (
    <p className="text-lg text-[#000]">
      {index ? index + 1 : 1}. {lastName} {firstName} {secondName}
    </p>
  );
};

export default SingleListOperators;
