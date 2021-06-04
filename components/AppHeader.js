import React from "react";
import { BsSearch } from "react-icons/bs";
import { Btn } from ".";

const AppHeader = () => {
  return (
    <div className="w-full px-4 py-3 bg-white rounded-md white-light-shadow flex items-center justify-between">
      <div className="flex border border-[#ddd] pl-3 rounded-full">
        <input
          type="text"
          placeholder="Search"
          className="rounded-t-xl rounded-b-xl pl-2"
        />
        <Btn>
          <div className="bg-[#3d5eff] p-3 rounded-full">
            <BsSearch className="text-white" />
          </div>
        </Btn>
      </div>
    </div>
  );
};

export default AppHeader;
