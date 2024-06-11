import React from "react";
import exerciseIcon from "./images/exercise.svg";
import playIcon from "./images/play.svg";
import selfCareIcon from "./images/self-care.svg";
import socialIcon from "./images/social.svg";
import studyIcon from "./images/study.svg";
import workIcon from "./images/work.svg";

interface ActivityCardProps {
  activity: string;
  hours: number;
  lastWeekHours: number;
  color: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  hours,
  lastWeekHours,
  color,
}) => {
  const getBackgroundIcon = () => {
    switch (activity) {
      case "Work":
        return workIcon;
      case "Play":
        return playIcon;
      case "Study":
        return studyIcon;
      case "Exercise":
        return exerciseIcon;
      case "Social":
        return socialIcon;
      case "Self Care":
        return selfCareIcon;
      default:
        return "";
    }
  };

  const backgroundIcon = getBackgroundIcon();

  return (
    <div
      className={`rounded-lg p-8 text-white relative ${color}`}
      style={{
        backgroundImage: `url(${backgroundIcon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{activity}</h2>
        <button className="text-gray-300 hover:text-white text-2xl">...</button>
      </div>
      <div className="mt-4">
        <h1 className="text-4xl font-bold">{hours}hrs</h1>
        <p className="text-lg text-gray-300">Last Week - {lastWeekHours}hrs</p>
      </div>
    </div>
  );
};

export default ActivityCard;
