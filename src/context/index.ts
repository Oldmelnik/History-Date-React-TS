import { createContext } from "react";

export const DataContext = createContext({
  current: 0,
  setCurrent: (_n: number): void => {},
});
