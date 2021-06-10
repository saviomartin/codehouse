import React from "react";
import Drawer from "@material-ui/core/Drawer";

const Sidebar = ({ showDrawer, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
      hi
    </Drawer>
  );
};

export default Sidebar;
