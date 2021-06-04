import React from "react";
import { SearchBar } from ".";

const AppHeader = () => {
  return (
    <div className="w-full p-4 bg-white rounded-md white-light-shadow flex items-center justify-between">
      <SearchBar />
    </div>
  );
};

export default AppHeader;
