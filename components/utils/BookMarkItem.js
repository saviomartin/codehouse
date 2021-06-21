import React, { useEffect, useState } from "react";

// icons
import { FiBookmark } from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

// from next
import Link from "next/link";
import { useRouter } from "next/router";

// components
import { Btn } from "..";

// axios for data fetching
import axios from "axios";

const BookMarkItem = ({ data, bookmarks, fetchBookmarks }) => {
  const [meta, setMetadata] = useState([]);
  const [loading, setLoading] = useState(false);

  // router of next js
  const router = useRouter();

  // check if already bookmarked
  const [isBookMarked, setIsBookMarked] = useState(false);

  // destructuring data
  const { id, cheatsheet_name, website_url } = data;

  // fetching bookmarked cheatsheets and making it true/false
  const fetchBookmarkedCheatsheets = () => {
    if (bookmarks) {
      if (bookmarks.some((cheatsheet) => cheatsheet.id === id)) {
        setIsBookMarked(true);
      } else {
        setIsBookMarked(false);
      }
    }
  };

  // useEffect to handle it
  useEffect(() => {
    fetchBookmarkedCheatsheets();
  }, [bookmarks]);

  useEffect(() => {
    // loading state
    setLoading(true);

    // fetching
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

  // generating image
  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg";
    }
  };

  // extracting url properties
  const url = new URL(website_url);

  // bookmarking cheatsheets
  const bookmarkCheatsheet = () => {
    if (typeof window !== "undefined") {
      if (isBookMarked) {
        // if already bookmarked remove bookmark
        window.localStorage.setItem(
          "bookmarks",
          JSON.stringify(bookmarks.filter((cheatsheet) => cheatsheet.id !== id))
        );

        // fetch all the deta again
        fetchBookmarks();
        fetchBookmarkedCheatsheets();
      } else {
        // adding bookmark
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

        // fetch all the deta again
        fetchBookmarks();
        fetchBookmarkedCheatsheets();
      }
    }
  };

  // going to its own page
  const goToCheetSheetPage = () => {
    router.push(`/post/${id}`);
  };

  return (
    <div
      className="cursor-pointer flex justify-start items-center flex-col p-5 px-4 rounded-md duration-500 white-light-shadow bg-white m-2 w-10/12 md:w-5/12 lg:w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale h-[325px] parent-for-image-scale dark:border-[#555] dark:bg-[#1F1F1F] dark:text-white"
      onClick={goToCheetSheetPage}
      data-aos="fade-left"
    >
      {loading ? (
        <div className="w-full h-full">
          <div className="relative overflow-hidden h-[157.5px] rounded-md w-full pulsate"></div>
          <div className="mt-3">
            <div className="relative overflow-hidden h-[15px] rounded-sm w-[170px] pulsate"></div>
            <div className="relative overflow-hidden h-[40px] rounded-sm w-[260px] pulsate mt-1"></div>
            <div className="relative overflow-hidden h-[10px] rounded-sm w-full pulsate mt-1"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-full relative overflow-hidden h-[157.5px] rounded-md">
            <Link href={`/post/${id}`}>
              <a>
                <img
                  src={meta.og && image()}
                  alt={cheatsheet_name && cheatsheet_name}
                  className="rounded-md w-full mb-2 h-[157.5px] min-h-[157.5px] scale-on-hover duration-500 scale-on-hover"
                />
              </a>
            </Link>
            <Btn className="rounded-md ml-1 absolute top-1 right-1">
              <div
                className="bg-[#ffffff] p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover border border-transparent poppins dark:border-[#555] dark:bg-[#1F1F1F]"
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
          <div className="block mt-2 w-full">
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
              <p className="text-[12px] text-[#666] mt-1 dark:text-[#aaa]">
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
