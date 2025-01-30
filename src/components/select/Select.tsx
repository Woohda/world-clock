import React from "react";
import "./Select.scss";
import { TTimezone } from "../../utils/types";
import { useAppSelector } from "../../services/store/store";

interface SelectProps {
  cities: TTimezone[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ cities, onChange }: SelectProps) => {
  const loading = useAppSelector((state) => state.location.loading);
  const [selectedCity, setSelectedCity] =
    React.useState<string>("Your zone time");

  return (
    <>
      <label className="label-select" htmlFor="city-timezone">
        Select city:
      </label>
      <select
        className={`${loading ? "loading disabled" : "select"}`}
        id="city-timezone"
        onChange={(event) => {
          setSelectedCity(event.target.value);
          onChange(event);
        }}
      >
        <option value="">{selectedCity}</option>
        {cities.map((city) => (
          <option key={city.timezone} value={city.city}>
            {city.city}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
