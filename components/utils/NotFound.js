import React from "react";

const NotFound = ({ darkMode, text }) => {
  return (
    <div className="w-full flex items-center flex-col">
      {darkMode ? (
        <img src="/assets/svg/no-results-white.svg" className="h-[300px]" />
      ) : (
        <img src="/assets/svg/no-results.svg" className="h-[300px]" />
      )}
      <h1 className="font-bold text-3xl dark:text-white">{text}</h1>
    </div>
  );
};

export default NotFound;
