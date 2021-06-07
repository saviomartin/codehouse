import React from "react";
import { Item } from "../components";

const bookmarks = ({ user }) => {
  const bookmarks = [
    {
      id: "hi",
      cheatsheet_name: "hi",
      website_url: "https://lo-victoria.com/react-cheat-sheet-for-beginners",
    },
    {
      id: "hi",
      cheatsheet_name: "hi",
      website_url: "https://lo-victoria.com/react-cheat-sheet-for-beginners",
    },
    {
      id: "hi",
      cheatsheet_name: "hi",
      website_url: "https://lo-victoria.com/react-cheat-sheet-for-beginners",
    },
  ];
  return (
    <div className="bg-[#ECF2F5] h-screen w-full flex items-center justify-center">
      <div className="w-10/12 h-[90vh] bg-white rounded-md white-light-shadow flex justify-center items-center flex-wrap">
        {bookmarks.map((cheetsheet, key) => (
          <Item data={cheetsheet} key={key} user={user} />
        ))}
      </div>
    </div>
  );
};

export default bookmarks;
