import { Button } from "@material-ui/core";
import React from "react";

const Header = () => {
  return (
    <div className="w-full px-4 py-3 glassmorphism flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-[#ECF2F5]">Code House</h1>
      <div className="flex h-full items-center">
        <a href="#" className="text-md font-medium continuous-line">
          How it works
        </a>
        <a href="#" className="text-md font-medium ml-6 continuous-line">
          Upcoming Features
        </a>
        <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-6">
          <div className="bg-[#F5BA31] px-4 py-[5px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
            Sign In
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header;
