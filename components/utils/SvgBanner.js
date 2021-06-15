import React from "react";

const SvgBanner = ({ text, description, image_url, dark_image_url, dark }) => {
  return (
    <div className="flex w-full items-center justify-center mt-3 mb-2">
      {dark ? (
        <img src={dark_image_url} className="h-[300px]" />
      ) : (
        <img src={image_url} className="h-[300px]" />
      )}

      <div className="w-5/12 overflow-hidden">
        <h1 className="text-4xl font-bold dark:text-[#fafafa]">{text}</h1>
        <p className="text-sm text-[#666] dark:text-[#aaa]">{description}</p>
      </div>
    </div>
  );
};

export default SvgBanner;
