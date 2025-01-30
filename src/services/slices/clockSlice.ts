import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IClock {
  id: number;
  timezone: string;
}

interface ClocksState {
  clocks: IClock[];
}

const initialState: ClocksState = {
  clocks: [
    {
      id: Date.now(),
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  ],
};

const clocksSlice = createSlice({
  name: "clocks",
  initialState,
  reducers: {
    addClock: (state) => {
      if (state.clocks.length < 10) {
        state.clocks.push({ ...initialState["clocks"][0], id: Date.now() });
      }
    },
    removeClock: (state, action: PayloadAction<number>) => {
      state.clocks = state.clocks.filter(
        (clock) => clock.id !== action.payload
      );
    },
    updateClock: (
      state,
      action: PayloadAction<{ id: number; timezone: string }>
    ) => {
      const { id, timezone } = action.payload;
      state.clocks = state.clocks.map((clock) => {
        if (clock.id === id) {
          return { ...clock, timezone };
        }
        return clock;
      });
    },
  },
});

export const { addClock, removeClock, updateClock } = clocksSlice.actions;
export default clocksSlice.reducer;
