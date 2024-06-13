// src/components/Dashboard/Dashboard.tsx

import React, { useState } from "react";
import { useQuery } from "react-query";
import ProfileCard from "../ProfileCard/ProfileCard";
import ActivityCard from "./ActivityCard";
import fetchActivityData, { Activity } from "../../api";

const Dashboard: React.FC = () => {
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );
  const { data, error, isLoading } = useQuery<Activity[], Error>(
    "activityData",
    fetchActivityData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const handleTimeFrameChange = (
    newTimeFrame: "daily" | "weekly" | "monthly"
  ) => {
    setTimeFrame(newTimeFrame);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center">
      <div className="mb-8 flex space-x-4">
        <button
          onClick={() => handleTimeFrameChange("daily")}
          className={`text-white px-4 py-2 rounded ${
            timeFrame === "daily" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Daily
        </button>
        <button
          onClick={() => handleTimeFrameChange("weekly")}
          className={`text-white px-4 py-2 rounded ${
            timeFrame === "weekly" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Weekly
        </button>
        <button
          onClick={() => handleTimeFrameChange("monthly")}
          className={`text-white px-4 py-2 rounded ${
            timeFrame === "monthly" ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          Monthly
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProfileCard name="Jeremy Robson" />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((activity) => (
            <ActivityCard
              key={activity.title}
              activity={activity.title}
              hours={activity.timeframes[timeFrame].current}
              lastWeekHours={activity.timeframes[timeFrame].previous}
              color={getColor(activity.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to map activity titles to colors
const getColor = (title: string) => {
  switch (title) {
    case "Work":
      return "bg-orange-500";
    case "Play":
      return "bg-teal-500";
    case "Study":
      return "bg-pink-500";
    case "Exercise":
      return "bg-green-500";
    case "Social":
      return "bg-purple-500";
    case "Self Care":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

export default Dashboard;
