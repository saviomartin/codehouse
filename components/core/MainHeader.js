import React from "react";
import Header from "../utils/Header";
import Link from "next/link";

const MainHeader = ({ user }) => {
  return (
    <div className="w-full bg-image text-white">
      <Header user={user} />
      <div className="w-full text-center flex items-center justify-center flex-col p-6">
        <Link href="/">
          <a className="text-4xl font-extrabold text-[#ECF2F5] change-span-color-onhover">
            Code House
            <span className="text-[#ffcf5e] text-5xl duration-500 leading-3">
              .
            </span>
          </a>
        </Link>
        <p className="w-7/12 text-sm text-[#ccc] text-left my-2">
          Introducing Code House, the all in one storehouse for developer
          cheatsheets. Code House is made up of 300+ curated cheatsheets from
          230+ sources. Filter by categories, or source sort by time or
          popularity, dark mode, add new cheatsheets, features requests, top
          cheatsheet hunter, make the app much more amazing! 🤟
        </p>
      </div>
    </div>
  );
};

export default MainHeader;
