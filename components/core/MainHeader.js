import React from "react";
import Header from "../utils/Header";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { FiBookOpen, FiGithub, FiStar } from "react-icons/fi";

const MainHeader = ({ user }) => {
  return (
    <div className="w-full bg-image text-white">
      <Header user={user} />
      <div className="w-full text-center flex items-start lg:items-center xl:items-center justify-center flex-col py-12 bg-pattern-dull pl-5 lg:pl-0 xl:pl-0">
        <Link href="/">
          <a className="text-4xl font-extrabold text-[#ECF2F5] change-span-color-onhover">
            Code House
            <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
              .
            </span>
          </a>
        </Link>
        <p className="w-10/12 lg:w-7/12 text-sm text-[#ccc] text-left my-2">
          Introducing Code House, the all in one storehouse for developer
          cheatsheets. Code House is made up of 300+ curated cheatsheets from
          230+ sources. Filter by categories, or source sort by time or
          popularity, dark mode, add new cheatsheets, features requests, top
          cheatsheet hunter, make the app much more amazing! 🤟
        </p>
        <div className="flex">
          <Button
            className="!p-0 !w-auto !h-auto !m-auto shine"
            href="http://savio.xyz/"
          >
            <div className="bg-[#F5BA31] px-5 py-2 text-base capitalize rounded-md font-semibold flex items-center justify-center">
              <FiBookOpen className="text-lg mr-1" />
              Read Blog
            </div>
          </Button>
          <Button
            className="!p-0 !w-auto !h-auto !m-auto !ml-2 shine"
            href="https://github.com/saviomartin/codehouse"
          >
            <div className="border-2 border-[#F5BA31] text-[#F5BA31] px-5 py-[7px] text-base capitalize rounded-md font-semibold flex items-center justify-center">
              <FiGithub className="text-lg mr-1" />
              <span className="poppins mr-1">46</span> Github Stars
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
