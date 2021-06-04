import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex border border-[#ddd] hover:border-[#3d5eff] duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-9/12 items-center justify-between ml-1">
      <input
        type="text"
        placeholder="Search"
        className="h-full py-1 pl-1 w-full"
      />
      <div className="bg-[#3d5eff] p-3 ml-2 cursor-pointer shine rounded-lg">
        <BsSearch className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;
