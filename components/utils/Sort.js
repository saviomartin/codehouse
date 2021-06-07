import React from "react";

const Sort = ({ setSort }) => {
  return (
    <div className="flex items-center">
      <h3
        className="font-bold cursor-pointer hover:text-[#3d5eff] duration-200"
        onClick={() => setSort("popular")}
      >
        Popular
      </h3>
      <h3
        className="font-normal text-[#555] ml-3 cursor-pointer hover:text-[#3d5eff] duration-200"
        onClick={() => setSort("newest")}
      >
        Newest
      </h3>
      <h3
        className="font-normal text-[#555] ml-3 cursor-pointer hover:text-[#3d5eff] duration-200"
        onClick={() => setSort("oldest")}
      >
        Oldest
      </h3>
    </div>
  );
};

export default Sort;
