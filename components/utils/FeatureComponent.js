import React from "react";

const FeatureComponent = ({ name, description, icon }) => {
  return (
    <div className="mx-4 my-4 lg:my-6 xl:my-6 relative flex items-center justify-start flex-col w-full lg:w-[17%] xl:w-[17%] text-center overflow-hidden">
      <div className="p-3 lg:p-5 xl:p-5 rouned-bg">{icon}</div>
      <h3 className="font-bold text-lg lg:text-xl xl:text-xl mt-5">{name}</h3>
      <p className="text-[#ccc] text-xs lg:text-sm xl:text-sm">{description}</p>
    </div>
  );
};

export default FeatureComponent;
