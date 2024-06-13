// src/interfaces/activity.ts

export interface Timeframe {
    daily: { current: number; previous: number };
    weekly: { current: number; previous: number };
    monthly: { current: number; previous: number };
  }
  