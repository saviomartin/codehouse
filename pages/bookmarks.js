import React from "react";
import { BookMarkItem, Header } from "../components";

const bookmarksPage = ({ bookmarks, user, fetchBookmarks }) => {
  return (
    <div className="bg-image h-full w-full overflow-visible">
      <Header user={user} />
      <div className="w-full h-full min-h-[90vh] rounded-md white-light-shadow flex justify-center items-center flex-wrap pt-10">
        {bookmarks &&
          bookmarks.map((cheetsheet, key) => (
            <BookMarkItem
              data={cheetsheet}
              key={key}
              bookmarks={bookmarks}
              fetchBookmarks={fetchBookmarks}
            />
          ))}
      </div>
    </div>
  );
};

export default bookmarksPage;
