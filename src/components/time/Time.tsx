import React from "react";
import { useEffect, useState } from "react";
import Deal from "../deal/Deal";
import DigitalClock from "../digitalclock/DigitalClock";

export type TTimeProps = {
  timezone: string;
};

const Time = ({ timezone }: TTimeProps) => {
  const [time, setTime] = useState(new Date());

  const timeIsNow = {
    seconds: time.getSeconds(),
    minutes: time.getMinutes(),
    hours: time.getHours(),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const localTime = new Date(
        now.toLocaleString("en-US", { timeZone: timezone })
      );
      setTime(localTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <>
      <Deal time={timeIsNow} />
      <DigitalClock timezone={timezone} />
    </>
  );
};

export default Time;
