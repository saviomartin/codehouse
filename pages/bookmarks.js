import React, { useEffect, useState } from "react";
import { BookMarkItem } from "../components";

const bookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBookmarks(JSON.parse(window.localStorage.getItem("bookmarked")));
    }
  });
  return (
    <div className="bg-[#ECF2F5] h-screen w-full flex items-center justify-center">
      <div className="w-10/12 h-[90vh] bg-white rounded-md white-light-shadow flex justify-center items-center flex-wrap">
        {bookmarks &&
          bookmarks.map((cheetsheet, key) => (
            <BookMarkItem data={cheetsheet} key={key} />
          ))}
      </div>
    </div>
  );
};

export default bookmarksPage;
