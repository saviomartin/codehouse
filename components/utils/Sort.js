import React from "react";

const Sort = ({ setSort, sort }) => {
  // 3 soring types
  // popular, newest, oldest

  return (
    <div className="flex items-center dark:text-white">
      <h3
        className={`${
          sort === "popular" && "font-bold"
        } cursor-pointer hover:text-[#3d5eff] duration-200`}
        onClick={() => setSort("popular")}
      >
        Popular
      </h3>
      <h3
        className={`${
          sort === "newest" && "font-bold"
        } cursor-pointer hover:text-[#3d5eff] duration-200 ml-3`}
        onClick={() => setSort("newest")}
      >
        Newest
      </h3>
      <h3
        className={`${
          sort === "oldest" && "font-bold"
        } cursor-pointer hover:text-[#3d5eff] duration-200 ml-3`}
        onClick={() => setSort("oldest")}
      >
        Oldest
      </h3>
    </div>
  );
};

export default Sort;
