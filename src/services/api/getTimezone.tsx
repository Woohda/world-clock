import { checkResponse } from "./type";
import { TTimezone } from "../../utils/types";

export const getTimezones = () =>
  fetch("/timezones.json")
    .then((res) => checkResponse<TTimezone[]>(res))
    .then((data) => {
      if (data) {
        return data;
      }

      return Promise.reject(data);
    });
