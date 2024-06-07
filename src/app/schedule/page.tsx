"use client";

import Spinner from "@/components/reusable/Spinner";
import { Button } from "@/components/ui/button";
import { correctDate } from "@/utils/helpers/correctDate";
import { getDate } from "@/utils/helpers/getDate";
import { getTime } from "@/utils/helpers/getTime";
import { FC, useState } from "react";

const Schedule: FC = () => {
  const url: string =
    "http://192.168.42.176:1000/api/v1/agents/agent/updateOrAddNewGraph";
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<boolean>(false);

  const handleBtnClick = () => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response?.ok) {
          setResponse(false);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setResponse(result);
        setTimeout(() => {
          setResponse(false);
        }, 5000);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  };
  return (
    <div>
      <Button
        onClick={handleBtnClick}
        className="bg-main_blue hover:bg-[#1f3ce299]"
      >
        {loading ? (
          <Spinner color="#fff" width={"25px"} height={"25px"} />
        ) : (
          "Обновить график"
        )}
      </Button>
      {response ? <h4>График успешно обновлен!</h4> : null}
    </div>
  );
  ``;
};

export default Schedule;
