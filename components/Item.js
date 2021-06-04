import React from "react";
import Link from "next/link";
import { Btn } from ".";
import { FiTriangle } from "react-icons/fi";

const Item = ({ data }) => {
  const { cheetsheet_name, website_url, category, twitter_handle } = data;
  return (
    <a className="flex justify-between flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text">
      <div className="">
        <img
          src="https://websitesetup.org/wp-content/uploads/2021/01/CSS-Cheat-Sheet.jpg"
          alt=""
          width="300"
          className="rounded-md w-full mb-2"
        />
        <Link href="/">
          <a className="font-bold text-lg duration-500 hover:text-[#3d5eff]">
            {cheetsheet_name.length > 50
              ? cheetsheet_name.slice(0, 50) + "..."
              : cheetsheet_name}
          </a>
        </Link>
        <p className="text-[12px] text-[#666] mt-1">
          {cheetsheet_name.length > 100
            ? cheetsheet_name.slice(0, 100) + "..."
            : cheetsheet_name}
        </p>
      </div>
      <div className="flex items-center justify-start mt-1 w-full">
        <Btn className="rounded-md">
          <div className="shine bg-[#3d5eff] text-white duration-500 px-4 py-2 text-md capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
            80
            <FiTriangle className="text-md ml-1 span duration-500" />
          </div>
        </Btn>
        <Btn className="ml-1">
          <div className="shine bg-[#3d5eff] text-white duration-500 px-4 py-2 text-md capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
            80
            <FiTriangle className="text-md ml-1 span duration-500" />
          </div>
        </Btn>
      </div>
    </a>
  );
};

export default Item;
