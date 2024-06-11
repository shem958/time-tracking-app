// dashboard.tsx
import React from "react";
import ProfileCard from "./ProfileCard";
import ActivityCard from "./ActivityCard";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <ProfileCard name="Jeremy Robson" />
        </div>
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActivityCard
            activity="Work"
            hours={32}
            lastWeekHours={36}
            color="bg-orange-500"
          />
          <ActivityCard
            activity="Play"
            hours={10}
            lastWeekHours={8}
            color="bg-teal-500"
          />
          <ActivityCard
            activity="Study"
            hours={4}
            lastWeekHours={7}
            color="bg-pink-500"
          />
          <ActivityCard
            activity="Exercise"
            hours={4}
            lastWeekHours={5}
            color="bg-green-500"
          />
          <ActivityCard
            activity="Social"
            hours={5}
            lastWeekHours={10}
            color="bg-purple-500"
          />
          <ActivityCard
            activity="Self Care"
            hours={2}
            lastWeekHours={2}
            color="bg-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
