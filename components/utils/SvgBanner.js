import React from "react";

const SvgBanner = ({ text, description, image_url, dark_image_url }) => {
  return (
    <div className="flex w-full items-center justify-center mt-3 mb-2">
      <img src="/assets/svg/review.svg" className="h-[300px]" />
      <div className="w-5/12 overflow-hidden">
        <h1 className="text-4xl font-bold dark:text-[#fafafa]">
          Cheatsheet on Review
        </h1>
        <p className="text-sm text-[#666] dark:text-[#aaa]">
          These cheatsheets are on review, give them an upvote to faster the
          process. Generally takes less than 2 days 🤟
        </p>
      </div>
    </div>
  );
};

export default SvgBanner;
