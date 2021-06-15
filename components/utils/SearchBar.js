import React from "react";

// icons
import { BsSearch, BsX } from "react-icons/bs";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex border border-[#ddd] dark:border-[#555] hover:border-[#3d5eff] duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-9/12 items-center justify-between ml-1">
      <input
        type="text"
        placeholder="Search"
        className="h-full py-1 pl-1 w-full bg-transparent dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div
        className="bg-[#3d5eff] p-3 ml-2 cursor-pointer shine rounded-lg"
        onClick={() => setSearchTerm("")}
      >
        {searchTerm ? (
          <BsX className="text-white" />
        ) : (
          <BsSearch className="text-white" />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
