import React, {useEffect, useState } from "react";

import {Backdrop} from "@material-ui/core";
import {BookMarkItem} from '../../components';
import {FiX} from 'react-icons/fi';

export default function BookmarksDialog({entities, setEntities, bookmarks, fetchBookmarks, showBookmarks, setShowBookmarks}) {
  const addToCollection = (data) => {
    const newBookmarkID = `bookmark-${Object.keys(entities.bookmarks).length + 1}`;
    let bookmarks = entities.bookmarks;
    const newBookmark = {
        id: newBookmarkID,
        content: data
    }
    bookmarks.push(newBookmark);

    let collections = entities.collections;
    if(!collections[showBookmarks].bookmarkIDs) collections[showBookmarks].bookmarkIDs = [];

    let bookmarkIDs = collections[showBookmarks].bookmarkIDs;
    bookmarkIDs.push(newBookmarkID);

    setEntities({ ...entities, bookmarks, collections });
    setShowBookmarks(null);
  }

  return (
    <Backdrop open={!!showBookmarks} className="z-[100000] flex items-center justify-center bg-[#00000042]" onClick={() => setShowBookmarks(false)}>
      <div className="glassmorphism rounded-lg h-3/4 w-3/4 p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h1 className="text-[#fff] text-3xl">All Bookmarks</h1>
          <FiX className="cursor-pointer text-[#fff] text-lg" onClick={e => setShowBookmarks(false)} />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-start">
          {bookmarks.map((cheatsheet, key) => (
            <div className="cursor-pointer" onClick={() => addToCollection(cheatsheet)}>
              <BookMarkItem
                data={cheatsheet}
                key={key}
                bookmarks={bookmarks}
                fetchBookmarks={fetchBookmarks}
                animated={false}
                interactive={false}
              />
            </div>
          ))}
        </div>
      </div>
    </Backdrop>
  )
}
