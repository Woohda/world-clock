import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTimezones } from "../../services/api/getTimezone";

export const fetchTimezones = createAsyncThunk(
  "fetchTimezones", async () => getTimezones()
);
