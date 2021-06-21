import React from "react";

const SvgBanner = ({ text, description, image_url }) => {
  return (
    <div className="flex w-full items-center justify-center mt-3 mb-2 flex-col lg:flex-row">
      <img src={image_url} className="h-[230px] lg:h-[300px]" />

      <div className="w-full lg:w-5/12 overflow-hidden text-center lg:text-left animate__animated animate__fadeInUp">
        <h1 className="text-2xl lg:text-4xl font-bold dark:text-[#fafafa]">
          {text}
        </h1>
        <p className="text-xs lg:text-sm text-[#666] dark:text-[#ccc]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SvgBanner;
