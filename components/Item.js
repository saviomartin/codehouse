import React from "react";
import Link from "next/link";
import { Btn } from ".";
import {
  FiBookmark,
  FiExternalLink,
  FiMessageCircle,
  FiTriangle,
} from "react-icons/fi";

const Item = ({ data }) => {
  const { cheetsheet_name, website_url, category, twitter_handle } = data;
  return (
    <a className="flex justify-between flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text">
      <Link href="/post">
        <a>
          <div className="w-full relative">
            <img
              src="https://websitesetup.org/wp-content/uploads/2021/01/CSS-Cheat-Sheet.jpg"
              alt=""
              width="300"
              className="rounded-md w-full mb-2"
            />
            <Btn className="rounded-md ml-1 absolute top-1 right-1">
              <div className="bg-white p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins">
                <FiBookmark className="text-md span duration-500" />
              </div>
            </Btn>
          </div>
          <h1 className="font-bold text-lg duration-500 hover:text-[#3d5eff]">
            {cheetsheet_name.length > 50
              ? cheetsheet_name.slice(0, 50) + "..."
              : cheetsheet_name}
          </h1>
          <p className="text-[12px] text-[#666] mt-1">
            {cheetsheet_name.length > 100
              ? cheetsheet_name.slice(0, 100) + "..."
              : cheetsheet_name}
          </p>
        </a>
      </Link>
      <div className="flex items-center justify-start mt-1 w-full">
        <Btn className="rounded-md">
          <div className="shine bg-[#3d5eff] text-white duration-500 px-4 py-2 text-md capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
            80
            <FiTriangle className="text-md ml-1 span duration-500" />
          </div>
        </Btn>
        <Btn className="rounded-md ml-1">
          <div className="border border-[#3d5eff] text-[#3d5eff] duration-500 px-4 py-2 text-md capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
            4
            <FiMessageCircle className="text-md ml-1 span duration-500" />
          </div>
        </Btn>
        <Btn className="ml-1">
          <div className="text-[#3d5eff] duration-500 px-3 py-3 h-full text-md capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
            <FiExternalLink className="text-md span duration-500" />
          </div>
        </Btn>
      </div>
    </a>
  );
};

export default Item;
