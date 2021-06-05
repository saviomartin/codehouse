import React, { useEffect, useState } from "react";

// icons
import { FiGrid, FiMenu, FiMoon } from "react-icons/fi";

// components
import { SearchBar, Sort, Btn } from ".";

const AppHeader = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="w-full py-4 px-8 bg-white rounded-md white-light-shadow flex items-center justify-between">
      <div className="flex items-center justify-start w-5/12">
        <Btn>
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-5 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover">
            Menu
            <FiMenu className="text-lg ml-1 span duration-500" />
          </div>
        </Btn>
        <SearchBar />
      </div>
      <div className="flex">
        {JSON.stringify(darkMode)}
        <Sort />
        <Btn className="!ml-6 rounded-md">
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover">
            <FiGrid className="text-lg -ml-1 span duration-500" />
          </div>
        </Btn>
        <Btn className="!ml-1 rounded-md" onClick={toggleDarkMode}>
          <div className="border border-[#ddd] hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover">
            <FiMoon className="text-lg -ml-1 span duration-500" />
          </div>
        </Btn>
      </div>
    </div>
  );
};

export default AppHeader;
