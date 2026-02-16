declare global {
  interface Window {
    INITIAL_INTERVALS: InitialData;
  }
}

export interface Data {
  year: number;
  text: string;
}

export interface Interval {
  title: string;
  start: number;
  end: number;
  data: Data[];
}

export type InitialData = Interval[];
