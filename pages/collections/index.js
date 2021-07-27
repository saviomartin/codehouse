import React, {useEffect, useState } from "react";
import 'tailwindcss/tailwind.css';

import dynamic from "next/dynamic";

//components
import { RightBar, InfoBar, Header, SvgBanner } from "../../components";

import Head from "next/head";
import { useRouter } from "next/router";

const Dnd = dynamic(import("./dnd-components/dnd"));
export default function Collections(props) {
  const { bookmarks, user, fetchBookmarks, darkMode } = props,
    [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
  },[]);

  return(
    <div className="divider relative bg-image">
      <div className=" fixed inset-0"></div>
      <Head>
        <title>
          Collections - Code House
        </title>
      </Head>
      <Header {...props} />
      <SvgBanner
        text="Your Collections"
        description="These are the collections of your bookmarked cheatsheets, you can move stuff around by dragging and dropping them 🤟"
        image_url="/assets/3d/bookmarks.png"
        dark={darkMode}
      />
      {winReady ? <Dnd /> : null}
    </div>
  )
}
