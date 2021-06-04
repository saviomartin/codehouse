import React from "react";
import { FiMenu } from "react-icons/fi";
import { SearchBar, Sort, Btn } from ".";

const AppHeader = () => {
  return (
    <div className="w-full py-4 px-8 bg-white rounded-md white-light-shadow flex items-center justify-between">
      <div className="flex items-start justify-start w-5/12">
        <Btn>
          <div className="border border-[#ddd] hover:border-[#3d5eff] duration-500 px-5 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center">
            Menu
            <FiMenu className="text-lg ml-1" />
          </div>
        </Btn>
        <SearchBar />
      </div>
      <Sort />
    </div>
  );
};

export default AppHeader;
