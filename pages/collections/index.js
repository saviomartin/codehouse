import React, {useEffect, useState } from "react";
import dynamic from "next/dynamic";

//components
import { RightBar, InfoBar, Header, SvgBanner } from "../../components";

import Head from "next/head";
import { useRouter } from "next/router";

const Dnd = dynamic(import("./dnd-components/dnd"));
const BookmarksDialog = dynamic(import("./bookmarks-dialog"));

export default function Collections(props) {
  const { bookmarks, user, fetchBookmarks, darkMode } = props,
    [winReady, setWinReady] = useState(false),
    [showBookmarks, setShowBookmarks] = useState(null),
    [entities, setEntities] = useState(null);

  useEffect(() => {
    return setWinReady(true);
  },[]);

  return(
    <div className="relative bg-image">
      {winReady && <BookmarksDialog entities={entities} setEntities={setEntities} showBookmarks={showBookmarks} setShowBookmarks={setShowBookmarks} {...props}/>}
      <Head>
        <title>
          {`Collections (${entities ? entities.collectionOrder.length : 0})`} - Code House
        </title>
      </Head>
      <Header {...props} />
      <SvgBanner
        text={`Your Collections (${entities ? entities.collectionOrder.length : 0})`}
        description="These are the collections of your bookmarked cheatsheets, you can move stuff around by dragging and dropping them 🤟"
        image_url="/assets/3d/bookmarks.png"
        dark={darkMode}
      />
    {winReady && <Dnd bookmarks={bookmarks} fetchBookmarks={fetchBookmarks} entities={entities} setEntities={setEntities} showBookmarks={showBookmarks} setShowBookmarks={setShowBookmarks} />}
    </div>
  )
}
