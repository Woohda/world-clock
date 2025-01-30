import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../services/store/store";
import "./App.scss";
import Button from "../components/button/Button";
import { addClock, removeClock } from "../services/slices/clockSlice";
import Clock from "../components/clock/Clock";
import { fetchTimezones } from "../services/slices/actions";

const App = () => {
  const clocks = useAppSelector((state) => state.clock.clocks);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTimezones());
  }, []);

  return (
    <div className="app">
      <h1 className="title">world clock</h1>
      <Button
        onClick={() => dispatch(addClock())}
        className={`${
          clocks.length >= 10 ? "add-button-disabled" : "button add-button"
        }`}
      >
        Add Clock
      </Button>
      <ul className="clocks-list">
        {clocks.map((clock) => (
          <Clock
            key={clock.id}
            id={clock.id}
            timezone={clock.timezone}
            onRemove={() => dispatch(removeClock(clock.id))}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
