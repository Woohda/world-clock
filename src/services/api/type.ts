export type TServerResponse<T> = {
  success: boolean;
} & T;

export const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
