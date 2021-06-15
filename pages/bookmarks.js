import React from "react";

// components
import { BookMarkItem, Header, SvgBanner } from "../components";

const bookmarksPage = (props) => {
  const { bookmarks, user, fetchBookmarks, darkMode } = props;

  return (
    <div className="bg-image h-full w-full overflow-visible">
      <Header user={user} />
      <div className="w-full h-full min-h-[90vh] rounded-md white-light-shadow pt-10">
        {bookmarks.length > 0 && bookmarks ? (
          <>
            <div className="flex w-full items-center justify-center mt-3 mb-2">
              <img
                src="/assets/svg/bookmarks-white.svg"
                className="h-[300px]"
              />

              <div className="w-5/12 overflow-hidden">
                <h1 className="text-4xl font-bold text-[#fafafa]">
                  Your BookMarks
                </h1>
                <p className="text-sm text-[#ccc]">
                  These are the cheatsheets you have bookmarked for later! ✌️
                </p>
              </div>
            </div>
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
