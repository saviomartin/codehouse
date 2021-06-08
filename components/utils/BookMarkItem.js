import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { Btn } from "..";
import axios from "axios";
import { BsFillBookmarkFill } from "react-icons/bs";

const BookMarkItem = ({ data, bookmarks, fetchBookmarks }) => {
  const [meta, setMetadata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  const { id, cheatsheet_name, website_url } = data;
  const fetchBookmarkedCheatsheets = () => {
    if (bookmarks) {
      if (bookmarks.some((cheatsheet) => cheatsheet.id === id)) {
        setIsBookMarked(true);
      } else {
        setIsBookMarked(false);
      }
    }
  };

  useEffect(() => {
    fetchBookmarkedCheatsheets();
  }, [bookmarks]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://meta-scrapper-api.herokuapp.com/api?url=${website_url}`)
      .then(async (response) => {
        if (response.request.status === 400) {
        } else {
          setLoading(false);
          await setMetadata(response.data);
        }
      })
      .catch((error) => {
        setLoading(true);
        console.log(error);
      });
  }, []);

  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg";
    }
  };

  const url = new URL(website_url);

  const bookmarkCheatsheet = () => {
    if (typeof window !== "undefined") {
      if (isBookMarked) {
        window.localStorage.setItem(
          "bookmarks",
          JSON.stringify(bookmarks.filter((cheatsheet) => cheatsheet.id !== id))
        );
        fetchBookmarks();
        fetchBookmarkedCheatsheets();
      } else {
        window.localStorage.setItem(
          "bookmarks",
          JSON.stringify([
            ...bookmarks,
            {
              id,
              cheatsheet_name,
              website_url,
            },
          ])
        );
        fetchBookmarks();
        fetchBookmarkedCheatsheets();
      }
    }
  };

  return (
    <div className="cursor-pointer flex justify-between items-center flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale h-[325px]">
      {loading ? (
        <>
          <div className="relative overflow-hidden h-[157.5px] rounded-md w-[260px] pulsate"></div>
          <div className="mt-3">
            <div className="relative overflow-hidden h-[15px] rounded-sm w-[170px] pulsate"></div>
            <div className="relative overflow-hidden h-[40px] rounded-sm w-[260px] pulsate mt-1"></div>
            <div className="relative overflow-hidden h-[10px] rounded-sm w-[260px] pulsate mt-1"></div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full relative overflow-hidden h-[157.5px] rounded-md">
            <Link href={`/post/${id}`}>
              <a>
                <img
                  src={meta.og && image()}
                  alt=""
                  className="rounded-md w-full mb-2 h-[157.5px] scale-on-hover duration-500"
                />
              </a>
            </Link>
            <Btn className="rounded-md ml-1 absolute top-1 right-1">
              <div
                className="bg-[#ffffff] p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins"
                onClick={bookmarkCheatsheet}
              >
                {isBookMarked ? (
                  <BsFillBookmarkFill className="text-md span duration-500" />
                ) : (
                  <FiBookmark className="text-md span duration-500" />
                )}
              </div>
            </Btn>
          </div>
          <div className="block mt-2">
            <a
              className="text-blue-500 text-sm"
              href={url.protocol && url.hostname && url.protocol + url.hostname}
              target="_blank"
            >
              {url.hostname && url.hostname}
            </a>
            <a href={website_url} target="_blank">
              <h1 className="font-bold text-lg duration-500 hover:text-[#3d5eff]">
                {cheatsheet_name.length > 50
                  ? cheatsheet_name.slice(0, 50) + "..."
                  : cheatsheet_name}
              </h1>
              <p className="text-[12px] text-[#666] mt-1">
                {meta.meta && meta.meta.description
                  ? meta.meta.description.slice(0, 150)
                  : "description not found"}
              </p>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default BookMarkItem;
