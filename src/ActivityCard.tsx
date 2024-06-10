// activitycard.tsx
import React from "react";
import iconEllipsis from "./images/icon-ellipsis.svg";
import iconWork from "./images/icon-work.svg";
import iconPlay from "./images/icon-play.svg";
import iconStudy from "./images/icon-study.svg";
import iconExercise from "./images/icon-exercise.svg";
import iconSocial from "./images/icon-social.svg";
import iconSelfCare from "./images/icon-self-care.svg";

interface ActivityCardProps {
  activity: string;
  hours: number;
  lastWeekHours: number;
  color: string;
}

const activityIcons: { [key: string]: string } = {
  Work: iconWork,
  Play: iconPlay,
  Study: iconStudy,
  Exercise: iconExercise,
  Social: iconSocial,
  "Self Care": iconSelfCare,
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  hours,
  lastWeekHours,
  color,
}) => {
  const icon = activityIcons[activity];
  return (
    <div
      className="relative rounded-lg p-6 text-white overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <img
        src={icon}
        alt={activity}
        className="absolute top-4 right-4 w-12 h-12 opacity-10"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">{activity}</h2>
        <button>
          <img src={iconEllipsis} alt="options" className="w-4 h-4" />
        </button>
      </div>
      <div className="mt-8">
        <h1 className="text-4xl font-bold">{hours}hrs</h1>
        <p className="text-sm text-gray-300">Last Week - {lastWeekHours}hrs</p>
      </div>
    </div>
  );
};

export default ActivityCard;
