import { FC } from "react";

type OperatorsType = {
  lastName: string[];
  firstName: string[];
  secondName: string[];
};

const SingleListOperators: FC<OperatorsType> = ({
  lastName,
  firstName,
  secondName,
}) => {
  return (
    <p className="text-lg text-[#8D99AF]">
      {lastName} {firstName} {secondName}
    </p>
  );
};

export default SingleListOperators;
