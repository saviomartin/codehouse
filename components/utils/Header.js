import React, { useState } from "react";

// material design
import { Button } from "@material-ui/core";

// link from next
import Link from "next/link";

// icons
import { FiMenu } from "react-icons/fi";

// menu from material ui
import Menu from "@material-ui/core/Menu";

// auth for signin out
import { auth } from "../../utils/firebase";

// components
import { Btn } from "..";

// toast
import toast from "react-hot-toast";

const Header = ({ setOpen, user, setUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showNav, setShowNav] = useState(false);

  // sign out function
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

    // normalize
    setAnchorEl(null);
  };

  return (
    <div className="w-full px-4 py-3 glassmorphism flex justify-between items-center flex-col lg:flex-row xl:flex-row">
      <Link href="/">
        <a className="text-3xl font-extrabold text-[#ECF2F5] change-span-color-onhover">
          Code House
          <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
            .
          </span>
        </a>
      </Link>
      <div className="flex h-full items-center">
        <div className="hidden md:flex lg:flex xl:flex">
          <a
            href="#"
            className="text-[13.75px] font-medium continuous-line text-white"
          >
            How it works
          </a>
          <a
            href="#"
            className="text-[13.75px] font-medium ml-[18px] continuous-line text-white"
          >
            Upcoming Features
          </a>
          <Link href="/feature-requests">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Feature Requests
            </a>
          </Link>
          <Link href="/contributors">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Contributors
            </a>
          </Link>
          <Link href="/review">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              On Review
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="text-[13.75px] font-medium ml-[18px] continuous-line text-white">
              Bookmarks
            </a>
          </Link>
        </div>
        <Btn className="rounded-md block lg:hidden md:hidden xl:hidden">
          <div
            className={`bg-app-gradient-2 dark:text-white duration-500 px-3 py-[10px] text-lg capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover menu-toggle ${
              showNav && "menu-toggle-active"
            }`}
            onClick={() => setShowNav(!showNav)}
          >
            <span></span>
          </div>
        </Btn>
        <Link href="/new">
          <a>
            <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-2 lg:!ml-[18px] xl:!ml-[18px]">
              <div className="border-2 border-[#ffcf5e] text-[#ffcf5e] px-2 py-[4px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
                New CheetSheet
              </div>
            </Button>
          </a>
        </Link>
        {user.email ? (
          <>
            <Button
              className="!p-0 !w-auto !h-auto !m-auto !ml-2"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <div className="bg-[#F5BA31] p-[6px] pr-[8px] text-md capitalize rounded-md font-semibold flex items-center justify-center">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : `https://unavatar.vercel.app/${user.email}`
                  }
                  alt=""
                  className="h-7 w-7 rounded-md mr-1"
                />
                {user.displayName ? user.displayName : "User"}
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
      {showNav && (
        <div className="flex lg:hidden xl:hidden md:hidden flex-col w-full text-center mt-3">
          <Link href="/bookmarks">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center">
                How it works
              </h3>
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center">
                Upcoming Features
              </h3>
            </a>
          </Link>
          <Link href="/feature-requests">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center">
                Feature Requests
              </h3>
            </a>
          </Link>
          <Link href="/contributors">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center">
                Contributors
              </h3>
            </a>
          </Link>
          <Link href="/review">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center">
                On Review
              </h3>
            </a>
          </Link>
          <Link href="/bookmarks">
            <a className="p-2 w-full flex items-center justify-center border border-[#764dff] bg-pattern rounded-md my-[3px]">
              <h3 className="font-bold continuous-line text-center">
                Bookmarks
              </h3>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
