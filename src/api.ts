// src/api.ts
import axios from "axios";

// Define the structure of the activity data
export interface Activity {
  title: string;
  timeframes: {
    daily: { current: number; previous: number };
    weekly: { current: number; previous: number };
    monthly: { current: number; previous: number };
  };
}

const fetchActivityData = async (): Promise<Activity[]> => {
  const response = await axios.get("/data.json");
  return response.data;
};

export default fetchActivityData;
