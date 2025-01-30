import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTimezone } from "../../utils/types";
import { fetchTimezones } from "./actions";

interface ITimezoneState {
  timezones: TTimezone[];
  loading: boolean;
  error: string | null;
}

const initialState: ITimezoneState = {
  timezones: [],
  loading: false,
  error: null,
};

const timezoneSlice = createSlice({
  name: "timezone",
  initialState,
  selectors: {
    selectTimezones: (state) => state.timezones,
    selectLoading: (state) => state.loading,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTimezones.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTimezones.fulfilled,
        (state, action: PayloadAction<TTimezone[]>) => {
          state.timezones = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchTimezones.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

export const { selectTimezones, selectLoading } = timezoneSlice.selectors;
export default timezoneSlice.reducer;
