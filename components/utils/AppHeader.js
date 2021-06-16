import React from "react";

// icons
import { FiGrid, FiList, FiMenu, FiMoon, FiSun } from "react-icons/fi";

// components
import { SearchBar, Sort, Btn } from "..";

const AppHeader = ({
  darkMode,
  setDarkMode,
  listView,
  setListView,
  searchTerm,
  setSearchTerm,
  sort,
  setSort,
  toggleDrawer,
}) => {
  // toggling dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem("darkMode", !darkMode);
  };

  // toggling view
  const toggleListView = () => {
    setListView(!listView);
    window.localStorage.setItem("listView", !listView);
  };

  return (
    <div className="w-full py-4 px-8 bg-white dark:bg-[#1F1F1F] rounded-md white-light-shadow flex items-center justify-center flex-col-reverse xl:justify-between lg:justify-between lg:flex-row xl:flex-row">
      <div className="flex items-center w-full lg:w-5/12 xl:w-5/12 justify-center lg:justify-start xl:justify-start mt-2 xl:mt-0 lg:mt-0">
        <Btn>
          <div
            className="border border-[#ddd] dark:border-[#555] hover:border-[#3d5eff] text-[#3d5eff] dark:text-white duration-500 px-5 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover"
            onClick={toggleDrawer}
          >
            Menu
            <FiMenu className="text-lg ml-1 span duration-500" />
          </div>
        </Btn>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div className="flex">
        <Sort setSort={setSort} sort={sort} />
        <Btn className="!ml-6 rounded-md">
          <div
            className="border border-[#ddd] dark:border-[#555] dark:text-white hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover"
            onClick={toggleListView}
          >
            {listView ? (
              <FiList className="text-lg -ml-1 span duration-500" />
            ) : (
              <FiGrid className="text-lg -ml-1 span duration-500" />
            )}
          </div>
        </Btn>
        <Btn className="!ml-1 rounded-md">
          <div
            className="border border-[#ddd] dark:border-[#555] dark:text-white hover:border-[#3d5eff] text-[#3d5eff] duration-500 px-3 pl-4 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <FiMoon className="text-lg -ml-1 span duration-500" />
            ) : (
              <FiSun className="text-lg -ml-1 span duration-500" />
            )}
          </div>
        </Btn>
      </div>
    </div>
  );
};

export default AppHeader;
