import React from "react";
import { Header, SvgBanner } from "../components";
import MainHeader from "../components/core/MainHeader";

const contributors = ({ darkMode, user }) => {
  return (
    <div className="bg-white h-full w-full overflow-visible min-h-screen">
      <MainHeader user={user} />

      <div className="flex w-full items-center justify-center mt-3 mb-2 flex-col lg:flex-row">
        <img
          src="/assets/svg/contributors-white.svg"
          className="h-[230px] lg:h-[300px]"
        />

        <div className="w-full lg:w-5/12 overflow-hidden">
          <h1 className="text-2xl lg:text-4xl font-bold text-[#fafafa] text-center lg:text-left">
            Your BookMarks
          </h1>
          <p className="text-xs lg:text-sm text-[#ccc] text-center lg:text-left">
            These are the cheatsheets you have bookmarked for later! ✌️
          </p>
        </div>
      </div>
    </div>
  );
};

export default contributors;
