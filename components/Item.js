import React from "react";
import Link from "next/link";

const Item = ({ data }) => {
  const { cheetsheet_name, website_url, category, twitter_handle } = data;
  return (
    <Link href="/">
      <a className="flex justify-between flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text">
        <div className="">
          <img
            src="https://websitesetup.org/wp-content/uploads/2021/01/CSS-Cheat-Sheet.jpg"
            alt=""
            width="300"
            className="rounded-md w-full"
          />
          <h1 className="font-bold text-lg mt-2 duration-500">
            {cheetsheet_name.length > 50
              ? cheetsheet_name.slice(0, 50) + "..."
              : cheetsheet_name}
          </h1>
          <p className="text-[12px] text-[#666] mt-1">
            {cheetsheet_name.length > 100
              ? cheetsheet_name.slice(0, 100) + "..."
              : cheetsheet_name}
          </p>
        </div>
        <div className="flex items-center mt-1">
          <img
            src={`https://unavatar.vercel.app/twitter/${twitter_handle}`}
            alt=""
            className="h-7 w-7 rounded-full"
          />
          <h3 className="text-sm font-semibold ml-1 text-[#333]">
            From @{twitter_handle}
          </h3>
        </div>
      </a>
    </Link>
  );
};

export default Item;
