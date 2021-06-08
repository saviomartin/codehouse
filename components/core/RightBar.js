import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Btn } from "..";

const RightBar = ({ currentPost }) => {
  const { upvotes, website_url, cheatsheet_name, twitter_handle } =
    currentPost[0];
  return (
    <div className="w-4/12 h-[90vh] rounded-md white-light-shadow mx-4 fixed right-0 top-[5vh] flex items-center justify-between flex-col">
      <div className="py-4 px-3 w-full">
        <h1 className="text-lg font-bold text-[#ECF2F5]">From</h1>
        <a
          className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200"
          href="https://twitter.com/saviomartin7"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/saviomartin"
            alt=""
            className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
          />
          <div className="ml-2">
            <h2 className="font-semibold text-lg text-[#222] hover:text-[#3d5eff] cheatsheet-continuous-line">
              SavioMartin7
            </h2>
            <FiTwitter className="text-[#3d5eff] ml-1 hover:text-[#333]" />
          </div>
        </a>
        <h1 className="text-lg font-bold text-[#ECF2F5] mt-3">Added By</h1>
        <a
          className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200"
          href="https://twitter.com/saviomartin7"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://avatars.githubusercontent.com/saviomartin"
            alt=""
            className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
          />
          <div className="ml-2">
            <h2 className="font-semibold text-lg text-[#222] hover:text-[#3d5eff] cheatsheet-continuous-line">
              SavioMartin7
            </h2>
            <FiTwitter className="text-[#3d5eff] ml-1 hover:text-[#333]" />
          </div>
        </a>
        <h1 className="text-lg font-bold text-[#ECF2F5] mt-3">Upvotes (4)</h1>
        <div className="flex mt-1">
          <img
            src="https://avatars.githubusercontent.com/saviomartin"
            alt=""
            className="h-[27px] w-[27px] mr-[5px] rounded-md pixelated white-light-shadow"
          />
          <img
            src="https://avatars.githubusercontent.com/saviomartin"
            alt=""
            className="h-[27px] w-[27px] mr-[5px] rounded-md pixelated white-light-shadow"
          />
          <img
            src="https://avatars.githubusercontent.com/saviomartin"
            alt=""
            className="h-[27px] w-[27px] mr-[5px] rounded-md pixelated white-light-shadow"
          />
        </div>
      </div>
      <div className="py-4 px-3 w-full">
        <h1 className="text-lg font-bold text-[#ECF2F5] mb-1">
          Share Cheatsheet
        </h1>
        <div className="flex">
          <Btn className="!p-0 !w-auto !h-auto !m-0">
            <button className="bg-[#1DA1F2] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
              Twitter
              <FaTwitter className="text-lg ml-1" />
            </button>
          </Btn>
          <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
            <button className="bg-[#F34423] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
              Reddit
              <FaRedditAlien className="text-lg ml-1 -mt-1" />
            </button>
          </Btn>
          <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
            <button className="bg-[#3F5793] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
              Facebook
              <FaFacebookSquare className="text-lg ml-1" />
            </button>
          </Btn>
          <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
            <button className="bg-[#0375B4] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
              LinkedIn
              <FaLinkedin className="text-lg ml-1" />
            </button>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
