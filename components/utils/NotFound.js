import React from "react";

const NotFound = ({  text }) => {
  return (
    <div className="w-full flex items-center flex-col">
      <img src="/assets/3d/not-found.png" className="h-[300px]" />
      <h1 className="font-bold text-3xl dark:text-white">{text}</h1>
    </div>
  );
};

export default NotFound;
