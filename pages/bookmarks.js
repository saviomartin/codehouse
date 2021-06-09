import React from "react";
import { BookMarkItem, Header } from "../components";

const bookmarksPage = ({ bookmarks, user, fetchBookmarks }) => {
  return (
    <div className="bg-image h-full w-full overflow-visible">
      <Header user={user} />
      <div className="w-full h-full min-h-[90vh] rounded-md white-light-shadow pt-10">
        {bookmarks.length > 0 && bookmarks ? (
          <>
            <h1 className="text-center text-white font-bold text-3xl mb-2">
              Your Bookmarks
            </h1>
            <div className="flex w-full justify-center flex-wrap">
              {bookmarks.map((cheetsheet, key) => (
                <BookMarkItem
                  data={cheetsheet}
                  key={key}
                  bookmarks={bookmarks}
                  fetchBookmarks={fetchBookmarks}
                />
              ))}
            </div>
          </>
        ) : null}
        {bookmarks.length < 1 && (
          <div className="w-full flex items-center flex-col -mt-5">
            <img src="/assets/svg/no-results-white.svg" className="h-[300px]" />
            <h1 className="font-bold text-3xl text-white">
              No BookMarks Found
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default bookmarksPage;
