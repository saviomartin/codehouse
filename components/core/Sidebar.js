import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { AppBar, Tab, Tabs } from "@material-ui/core";

const Sidebar = ({ showDrawer, toggleDrawer }) => {
  const [value, setValue] = useState("categories");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
      <div className="w-auto h-full flex items-center justify-between flex-col bg-[#ECF2F5]">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className="bg-white border border-t-[#ccc] white-light-shadow"
        >
          <Tab label="Categories" value="categories" />
          <Tab label="Sources" value="sources" />
        </Tabs>
        <div className="h-full w-full flex items-center flex-col py-3">
          <input
            type="text"
            className="w-[92.5%] border white-light-shadow border-[#4469FA] hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3 py-2"
            placeholder={`Search ${
              value.charAt(0).toUpperCase() + value.slice(1)
            }`}
          />
          <div className="mt-3 w-full h-full flex items-center justify-start flex-col">
            {value === "categories" ? (
              <div className="w-[92.5%] py-2 border border-[#ddd] duration-500 bg-white hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3">
                <h1 className="text-md">React</h1>
              </div>
            ) : (
              <div className="w-[92.5%] h-10 border border-[#ddd] duration-500 bg-white hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3"></div>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
