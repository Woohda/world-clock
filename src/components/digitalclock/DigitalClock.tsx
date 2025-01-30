import React from "react";
import "./DigitalClock.scss";
import { TTimeProps } from "../time/Time";

const DigitalClock = (timezone: TTimeProps) => {
  const now = new Date();

  return (
    <p className="digital-clock">
      {now.toLocaleTimeString("ru-RU", { timeZone: timezone.timezone })}
    </p>
  );
};

export default DigitalClock;
