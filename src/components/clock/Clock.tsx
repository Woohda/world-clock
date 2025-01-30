import React from "react";
import Time from "../time/Time";
import Button from "../button/Button";
import { IClock } from "../../services/slices/clockSlice";
import TimezoneSelect from "../timezoneSelect/TimezoneSelect";
import "./Clock.scss";

interface ClockProps extends IClock {
  onRemove: (index: number) => void;
}
const Clock = ({ id, timezone, onRemove }: ClockProps) => {
  return (
    <li className={"container"}>
      <Button
        className={"close-button button"}
        onClick={() => onRemove(id)}
      ></Button>
      <Time timezone={timezone} />
      <TimezoneSelect id={id} />
    </li>
  );
};

export default Clock;
