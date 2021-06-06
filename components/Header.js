import React from "react";

// material design
import { Button } from "@material-ui/core";

// link from next
import Link from "next/link";

const Header = ({ setOpen }) => {
  return (
    <div className="w-full px-4 py-3 glassmorphism flex justify-between items-center">
      <Link href="/">
        <a className="text-3xl font-extrabold text-[#ECF2F5] change-span-color-onhover">
          Code House
          <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
            .
          </span>
        </a>
      </Link>
      <div className="flex h-full items-center">
        <a href="#" className="text-sm font-medium continuous-line">
          How it works
        </a>
        <a href="#" className="text-sm font-medium ml-6 continuous-line">
          Upcoming Features
        </a>
        <a href="#" className="text-sm font-medium ml-6 continuous-line">
          Contributors
        </a>
        <a href="#" className="text-sm font-medium ml-6 continuous-line">
          On Review
        </a>
        <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-6">
          <div className="border-2 border-[#ffcf5e] text-[#ffcf5e] px-2 py-[4px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
            New CheetSheet
          </div>
        </Button>
        <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-2">
          <div
            className="bg-[#F5BA31] px-4 py-[6px] text-md capitalize rounded-md font-semibold flex items-center justify-center"
            onClick={() => setOpen(true)}
          >
            Sign In
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header;
