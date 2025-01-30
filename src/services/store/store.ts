import { combineSlices, configureStore } from "@reduxjs/toolkit";
import clocksReducer from "../slices/clockSlice";
import timezoneReducer from "../slices/timezoneSlice";
import { useDispatch, useSelector } from "react-redux";

export const rootReducer = combineSlices({
  clock: clocksReducer,
  location: timezoneReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Типы для RootState и Dispatch
type AppState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Типизация кастомных хуков
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
