import React from "react";

interface ProfileCardProps {
  name: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name }) => {
  const image = "/images/image-jeremy.png";
  return (
    <div className="bg-purple-600 rounded-lg p-8 text-white flex flex-col items-center">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-6" />
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="mt-6 text-lg">Report for</p>
      <div className="mt-6 text-lg flex flex-col items-center">
        <p className="cursor-pointer hover:underline">Daily</p>
        <p className="cursor-pointer hover:underline mt-2">Weekly</p>
        <p className="cursor-pointer hover:underline mt-2">Monthly</p>
      </div>
    </div>
  );
};

export default ProfileCard;
