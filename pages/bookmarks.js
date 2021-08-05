import Head from "next/head";
import React from "react";

// components
import { BookMarkItem, MainHeader, SvgBanner, NotFound } from "../components";

const bookmarksPage = (props) => {
  const { bookmarks, user, fetchBookmarks, darkMode } = props;

  return (
    <div className="bg-[#ECF2F5] dark:bg-[#2F2F2F] h-full w-full overflow-visible pb-10">
      <MainHeader {...props} />
      <Head>
        <title>Your BookMarks - Code House</title>
      </Head>
      <div className="w-full h-full min-h-[90vh] rounded-md white-light-shadow pt-5">
        {bookmarks.length > 0 && bookmarks ? (
          <>
            <SvgBanner
              text="Your BookMarks"
              description="These are the cheatsheets you have bookmarked for later! ✌️"
              image_url="/assets/3d/bookmarks.png"
              dark={darkMode}
            />
            <div className="flex w-full justify-center flex-wrap">
              {bookmarks.map((cheatsheet, key) => (
                <div className="m-4">
                  <BookMarkItem
                    data={cheatsheet}
                    key={key}
                    bookmarks={bookmarks}
                    fetchBookmarks={fetchBookmarks}
                  />
                </div>
              ))}
            </div>
          </>
        ) : null}
        {bookmarks.length < 1 && <NotFound text="No BookMarks Found" />}
      </div>
    </div>
  );
};

export default bookmarksPage;
