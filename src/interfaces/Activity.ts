export enum TimeFrame {
  Daily,
  Weekly,
  Monthly,
}

export interface Timeframe {
  daily: { current: number; previous: number };
  weekly: { current: number; previous: number };
  monthly: { current: number; previous: number };
  [key: string]: { current: number; previous: number }; // Add index signature
}
