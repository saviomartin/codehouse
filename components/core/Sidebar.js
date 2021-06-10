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
        {value === "categories" ? <h1>Categories</h1> : <h1>Sources</h1>}
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Categories" value="categories" />
          <Tab label="Sources" value="sources" />
        </Tabs>
      </div>
    </Drawer>
  );
};

export default Sidebar;
