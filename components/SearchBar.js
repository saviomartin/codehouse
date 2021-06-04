import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex border border-[#ddd] pl-3 rounded-full p-1 w-3/12 items-center justify-between">
      <input
        type="text"
        placeholder="Search"
        className="h-full py-1 pl-1 w-full"
      />
      <div className="bg-[#3d5eff] p-3 ml-2 cursor-pointer shine rounded-full">
        <BsSearch className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
