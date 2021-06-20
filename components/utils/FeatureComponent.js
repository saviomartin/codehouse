import React from "react";

const FeatureComponent = () => {
  return (
    <div className="mx-1 relative flex items-center justify-center flex-col w-[20%] text-center overflow-hidden">
      <div className="p-5 rouned-bg">
        <FiLayers className="text-4xl" />
      </div>
      <h3 className="font-bold text-xl mt-5">Category Filter</h3>
      <p className="text-[#ccc] text-sm">
        Feel free to filter using categories, it can help you find the best one.
      </p>
    </div>
  );
};

export default FeatureComponent;
