// Import React from the React library
import React from "react";
// Import the ProfileCard component
import ProfileCard from "./ProfileCard";
// Import the ActivityCard component
import ActivityCard from "./ActivityCard";

// Create the Dashboard functional component
const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-12 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProfileCard name="Jeremy Robson" />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ActivityCard
            activity="Work"
            hours={32}
            lastWeekHours={36}
            color="#FF8C66"
          />
          <ActivityCard
            activity="Play"
            hours={10}
            lastWeekHours={8}
            color="#56C2E6"
          />
          <ActivityCard
            activity="Study"
            hours={4}
            lastWeekHours={7}
            color="#FF5C7C"
          />
          <ActivityCard
            activity="Exercise"
            hours={4}
            lastWeekHours={5}
            color="#4BCF83"
          />
          <ActivityCard
            activity="Social"
            hours={5}
            lastWeekHours={10}
            color="#7235D1"
          />
          <ActivityCard
            activity="Self Care"
            hours={2}
            lastWeekHours={2}
            color="#F1C65B"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
