import React from "react";

const FeatureComponent = ({ name, description, icon }) => {
  return (
    <div className="mx-1 relative flex items-center justify-center flex-col w-[20%] text-center overflow-hidden">
      <div className="p-5 rouned-bg">{icon}</div>
      <h3 className="font-bold text-xl mt-5">{name}</h3>
      <p className="text-[#ccc] text-sm">{description}</p>
    </div>
  );
};

export default FeatureComponent;
