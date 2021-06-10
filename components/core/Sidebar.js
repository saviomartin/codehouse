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
      <div className="w-auto h-full flex items-center justify-between flex-col">
        <div className="h-full w-full flex items-center flex-col bg-black"></div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Categories" value="categories" />
          <Tab label="Sources" value="sources" />
        </Tabs>
      </div>
    </Drawer>
  );
};

export default Sidebar;
