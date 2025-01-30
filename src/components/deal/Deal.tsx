import React from "react";
import "./Deal.scss";
import { useAppSelector } from "../../services/store/store";
import Preloader from "../preloader/Preloader";

export interface DealProps {
  time: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Deal = ({ time }: DealProps) => {
  const loading = useAppSelector((state) => state.location.loading);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="clock">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="98"
              stroke="black"
              strokeWidth="2"
              fill="white"
            />
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="5"
                x2="100"
                y2="15"
                transform={`rotate(${i * 30} 100 100)`}
                stroke="black"
                strokeWidth="2"
              />
            ))}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="60"
              stroke="black"
              strokeWidth="3"
              transform={`rotate(${
                time.hours * 30 + time.minutes / 2
              } 100 100)`}
            />
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="20"
              stroke="black"
              strokeWidth="2"
              transform={`rotate(${time.minutes * 6} 100 100)`}
            />
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="10"
              stroke="red"
              strokeWidth="1"
              transform={`rotate(${time.seconds * 6} 100 100)`}
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default Deal;
