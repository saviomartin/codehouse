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
          className="bg-white border border-t-[#ccc] white-light-shadow"
        >
          <Tab label="Categories" value="categories" />
          <Tab label="Sources" value="sources" />
        </Tabs>
        <div className="h-full w-full flex items-center flex-col py-3">
          <input
            type="text"
            className="w-[92.5%] h-10 border border-[#888] hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3"
            placeholder={`Search ${
              value.charAt(0).toUpperCase() + value.slice(1)
            }`}
          />
          {JSON.stringify(value)}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
