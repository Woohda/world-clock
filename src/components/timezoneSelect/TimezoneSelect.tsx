import React from "react";
import Select from "../select/Select";
import { useAppDispatch, useAppSelector } from "../../services/store/store";
import { updateClock } from "../../services/slices/clockSlice";

const TimezoneSelect = (id: { id: number }) => {
  const dispatch = useAppDispatch();
  const timeZones = useAppSelector((state) => state.location.timezones);
  const selectedClocks = useAppSelector((state) => state.clock.clocks);
  const availableTimezones = timeZones.filter(
    (tz) => !selectedClocks.some((clock) => clock.timezone === tz.timezone)
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue = event.target.value;
    const zone = timeZones.find((city) => city.city === selectValue);
    if (!zone) return {};
    dispatch(updateClock({ id: id.id, timezone: zone.timezone }));
  };
  return <Select cities={availableTimezones} onChange={handleChange} />;
};

export default TimezoneSelect;
