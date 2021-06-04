import React from "react";

const Item = ({ data }) => {
  const { cheetsheet_name, website_url, category, twitter_handle } = data;
  return (
    <div className="flex items-center justify-center flex-col p-5 rounded-md white-light-shadow bg-white m-2 w-3/12">
      <img
        src="https://websitesetup.org/wp-content/uploads/2021/01/CSS-Cheat-Sheet.jpg"
        alt=""
        width="300"
        height="182"
        className="rounded-md"
      />
      <h1 className="font-bold text-xl">
        {cheetsheet_name.length > 50
          ? cheetsheet_name.slice(0, 50) + "..."
          : cheetsheet_name}
      </h1>
    </div>
  );
};

export default Item;
