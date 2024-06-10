//Import React from the React library
import React from "react";
import imageJeremy from "./images/image-jeremy.png";

// Define the interface for the props that will be passed to the ProfileCard Component
interface ProfileCardProps {
  name: string;
}

// Create the ProfileCard functional component with props destructuring
const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  return (
    //container div for the profile card with Tailwind CSS classes for styling
    <div className="bg-indigo-500 text-white rounded-lg p-6">
      <div className="flex flex-col items-center">
        <img
          src={imageJeremy}
          alt={name}
          className="w-16 h-16 rounded-full mb-4"
        />
        <h2 className="text-sm">Report for</h2>
        <h1 className="text-2xl font-bold">{name}</h1>
      </div>
      <div className="mt-6 text-center space-y-2">
        <p className="cursor-pointer">Daily</p>
        <p className="cursor-pointer">Weekly</p>
        <p className="cursor-pointer">Monthly</p>
      </div>
    </div>
  );
};

export default ProfileCard;
