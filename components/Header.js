import React, { useState } from "react";

// material design
import { Button } from "@material-ui/core";

// link from next
import Link from "next/link";

import Menu from "@material-ui/core/Menu";
import { auth } from "../utils/firebase";
import toast from "react-hot-toast";

const Header = ({ setOpen, user, setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        setUser([]);
        toast.success("Signed Out from Codehouse!");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    setAnchorEl(null);
  };

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
        {user.displayName ? (
          <>
            <Button
              className="!p-0 !w-auto !h-auto !m-auto !ml-2"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <div className="bg-[#F5BA31] p-[6px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
                <img
                  src={user.photoURL}
                  alt=""
                  className="h-7 w-7 rounded-md mr-1"
                />
                {user.displayName}
              </div>
            </Button>
            <Menu
              getContentAnchorEl={null}
              className="!mt-1"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <Button
                className="!p-0 !w-auto !h-auto !m-auto"
                onClick={signOut}
              >
                <div className="px-4 py-[6px] text-md capitalize rounded-md font-semibold flex items-center justify-center hover:text-red-500 duration-500">
                  Sign Out
                </div>
              </Button>
            </Menu>
          </>
        ) : (
          <Button
            className="!p-0 !w-auto !h-auto !m-auto shine !ml-2"
            onClick={() => setOpen(true)}
          >
            <div className="bg-[#F5BA31] px-4 py-[6px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
              Sign In
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Header;
