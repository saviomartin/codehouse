import React, { useEffect, useState } from "react";

// next js components
import Link from "next/link";

// components
import { Btn } from "..";
import { useRouter } from "next/router";

// icons
import {
  FiBookmark,
  FiExternalLink,
  FiMessageCircle,
  FiTriangle,
} from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

// axios for data fetching
import axios from "axios";

// fetching and editing data
import { harperFetch } from "../../utils/HarperFetch";

const Item = ({
  data,
  listView,
  user,
  setOpen,
  searchTerm,
  bookmarks,
  fetchBookmarks,
  review = false,
}) => {
  const [meta, setMetadata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // router
  const router = useRouter();

  // checking states
  const [isUpvoted, setIsUpvoted] = useState(false); // checking is already upvoted
  const [changed, setChanged] = useState(); // checking is data changed
  const [isBookMarked, setIsBookMarked] = useState(false); // checking is already bookmarked

  // destructuring data
  const { id, cheatsheet_name, website_url, upvotes } = data;

  // fetching bookmarked cheatsheets and making isBookmarked true/false
  const fetchBookmarkedCheatsheets = () => {
    if (bookmarks.some((cheatsheet) => cheatsheet.id === id)) {
      setIsBookMarked(true);
    } else {
      setIsBookMarked(false);
    }
  };

  // useEffect to handle it
  useEffect(() => {
    fetchBookmarkedCheatsheets();
  }, [bookmarks]);

  useEffect(() => {
    // normal state
    setMetadata([]);

    // fetching state
    axios
      .get(`https://meta-scrapper-api.herokuapp.com/api?url=${website_url}`)
      .then(async (response) => {
        if (response.request.status === 400) {
          setLoading(false);
          await setError(true);
        } else {
          setLoading(false);
          await setMetadata(response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [searchTerm]);

  // extracting url properties
  const url = new URL(website_url);

  // going to its own page
  const goToCheetSheetPage = () => {
    router.push(`/${review ? "review" : "post"}/${id}`);
  };

  // generating image for thumbnail
  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg";
    }
  };

  // use effect for handling is upvoted or not
  useEffect(() => {
    if (upvotes) {
      if (user.email) {
        setIsUpvoted(upvotes.includes(user.email));
      }
    }
  });

  // upvoting a cheatsheet
  const upvoteCheatSheet = () => {
    if (user.email) {
      if (isUpvoted) {
        // removing upvote if already upvoted
        const index = upvotes.indexOf(user.email);
        upvotes.splice(index, 1);

        if (review) {
          fetch("/api/POST/upvote-review-cheatsheet", {
            method: "POST",
            body: JSON.stringify({
              id: id,
              upvotes,
            }),
          });
        } else {
          fetch("/api/POST/upvote-cheatsheet", {
            method: "POST",
            body: JSON.stringify({
              id: id,
              upvotes,
            }),
          });
        }

        // changing visual data without fetching again
        setChanged("sub");
      } else {
        // adding upvote
        if (review) {
          fetch("/api/POST/upvote-review-cheatsheet", {
            method: "POST",
            body: JSON.stringify({
              id: id,
              upvotes: [...upvotes, user.email],
            }),
          });
        } else {
          fetch("/api/POST/upvote-cheatsheet", {
            method: "POST",
            body: JSON.stringify({
              id: id,
              upvotes: [...upvotes, user.email],
            }),
          });
        }

        // changing visual data without fetching again
        setChanged("add");
      }
    } else {
      // showing sign in popup is user not found
      setOpen(true);
    }
  };

  // bookmarking a cheatsheet
  const bookmarkCheatsheet = () => {
    if (typeof window !== "undefined") {
      if (isBookMarked) {
        // removing bookmark if already bookmarked
        window.localStorage.setItem(
          "bookmarks",
          JSON.stringify(bookmarks.filter((cheatsheet) => cheatsheet.id !== id))
        );

        // making state uptodate
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

        // making state uptodate
        fetchBookmarks();
        fetchBookmarkedCheatsheets();
      }
    }
  };

  return (
    <>
      {listView ? (
        <div
          className="cursor-pointer flex items-center p-3 rounded-md duration-500 white-light-shadow bg-white m-2 w-full lg:w-10/12 min-w-10/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale dark:border-[#555] dark:bg-[#1F1F1F] dark:text-white"
          onClick={goToCheetSheetPage}
          data-aos="fade-left"
        >
          {loading ? (
            <div className="flex w-full h-full items-center">
              <div className="h-[150px] w-[400px] pulsate rounded-md"></div>
              <div className="h-[150px] w-full ml-2 py-2 flex justify-between flex-col">
                <div className="w-full">
                  <div className="pulsate rounded-sm h-[10px] w-[230px]"></div>
                  <div className="pulsate rounded-md h-[35px] mt-1 w-[400px]" />
                  <div className="pulsate rounded-sm h-[12.5px] mt-1 w-[600px]"></div>
                </div>
                <div className="flex mt-2">
                  <div className="relative overflow-hidden h-[35px] rounded-md w-[120px] mr-1 pulsate mt-1"></div>
                  <div className="relative overflow-hidden h-[35px] rounded-md w-[120px] mr-1 pulsate mt-1"></div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="w-[250px] relative h-full overflow-hidden flex items-center justify-center rounded-md">
                <Link href={`/post/${id}`}>
                  <a>
                    <img
                      src={meta.og && image()}
                      alt=""
                      width="270"
                      className="rounded-md w-full h-[150px] scale-on-hover duration-500"
                    />
                  </a>
                </Link>
                <Btn className="rounded-md ml-1 absolute top-1 right-1">
                  <div
                    className="bg-[#ffffff] p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins dark:bg-[#1F1F1F] border border-transparent dark:border-[#555]"
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
              <div className="w-9/12 h-full px-3 pl-5 py-5 flex items-start justify-between flex-col">
                <div className="block">
                  <a
                    className="text-blue-500 text-xs lg:text-sm"
                    href={
                      url.protocol &&
                      url.hostname &&
                      url.protocol + url.hostname
                    }
                    target="_blank"
                  >
                    {url.hostname && url.hostname}
                  </a>
                  <a href={website_url} target="_blank">
                    <h1 className="font-bold text-lg lg:text-xl duration-500 hover:text-[#3d5eff]">
                      {cheatsheet_name}
                    </h1>
                    <p className="text-xs lg:text-[12px] text-[#666] dark:text-[#aaa] mt-1">
                      {meta.meta && meta.meta.description
                        ? meta.meta.description.slice(0, 150)
                        : "Description not found"}
                    </p>
                  </a>
                </div>
                {upvotes && (
                  <div className="flex items-center justify-start mt-1 w-full">
                    <Btn className="rounded-md">
                      <div
                        className={`shine ${
                          isUpvoted
                            ? "bg-[#3d5eff] text-white"
                            : "border border-[#3d5eff] text-[#3d5eff] dark:border-[#555] dark:text-white"
                        } ${
                          changed === "add"
                            ? "bg-[#3d5eff] !text-white"
                            : "text-white"
                        } duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins`}
                        onClick={upvoteCheatSheet}
                      >
                        {changed === "add"
                          ? upvotes.length + 1
                          : changed === "sub"
                          ? upvotes.length - 0
                          : upvotes.length}
                        <FiTriangle className="text-sm ml-1 span duration-500" />
                      </div>
                    </Btn>
                    <Link href={`/post/${id}`}>
                      <a>
                        <Btn className="rounded-md ml-1">
                          <div className="border border-[#3d5eff] text-[#3d5eff] duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins dark:border-[#555] dark:text-white">
                            {data.comments.length}
                            <FiMessageCircle className="text-sm ml-1 span duration-500" />
                          </div>
                        </Btn>
                      </a>
                    </Link>
                    <a href={website_url} target="_blank" className="ml-1">
                      <Btn>
                        <div className="text-[#3d5eff] duration-500 px-2 py-3 h-full text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins dark:text-white">
                          <FiExternalLink className="text-sm span duration-500" />
                        </div>
                      </Btn>
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <div
          className="cursor-pointer flex justify-between flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-full md:w-5/12 lg:w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale dark:border-[#555] dark:bg-[#1F1F1F] dark:text-white"
          onClick={goToCheetSheetPage}
          data-aos="fade-left"
        >
          {loading ? (
            <>
              <div className="relative overflow-hidden h-[157.5px] rounded-md w-full pulsate"></div>
              <div className="mt-3">
                <div className="relative overflow-hidden h-[15px] rounded-sm w-[170px] pulsate"></div>
                <div className="relative overflow-hidden h-[40px] rounded-sm w-[260px] pulsate mt-1"></div>
                <div className="relative overflow-hidden h-[10px] rounded-sm w-[260px] pulsate mt-1"></div>
              </div>
              <div className="flex mt-2">
                <div className="relative overflow-hidden h-[35px] rounded-sm w-[120px] mr-1 pulsate mt-1"></div>
                <div className="relative overflow-hidden h-[35px] rounded-sm w-[120px] mr-1 pulsate mt-1"></div>
              </div>
            </>
          ) : (
            <>
              <div className="block">
                <div className="w-full relative overflow-hidden h-[157.5px] rounded-md">
                  <Link href={`/post/${id}`}>
                    <a>
                      <img
                        src={meta.og && image()}
                        alt=""
                        width="300"
                        className="rounded-md w-full mb-2 h-[157.5px] scale-on-hover duration-500"
                      />
                    </a>
                  </Link>
                  <Btn className="rounded-md ml-1 absolute top-1 right-1">
                    <div
                      className="bg-[#ffffff] dark:bg-[#1F1F1F] border border-transparent dark:border-[#555] p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins"
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
                    className="text-blue-500 text-xs lg:text-sm"
                    href={
                      url.protocol &&
                      url.hostname &&
                      url.protocol + url.hostname
                    }
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
                    <p className="text-xs lg:text-[12px] text-[#666] dark:text-[#aaa] mt-1">
                      {meta.meta && meta.meta.description
                        ? meta.meta.description.slice(0, 150)
                        : "description not found"}
                    </p>
                  </a>
                </div>
              </div>
              {upvotes && (
                <div className="flex items-center justify-start mt-1 w-full">
                  <Btn className="rounded-md">
                    <div
                      className={`shine ${
                        isUpvoted
                          ? "bg-[#3d5eff] text-white"
                          : "border border-[#3d5eff] text-[#3d5eff] dark:border-[#555] dark:text-white"
                      } ${
                        changed === "add"
                          ? "bg-[#3d5eff] !text-white"
                          : "text-white"
                      } duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins`}
                      onClick={upvoteCheatSheet}
                    >
                      {changed === "add"
                        ? upvotes.length + 1
                        : changed === "sub"
                        ? upvotes.length - 0
                        : upvotes.length}
                      <FiTriangle className="text-sm ml-1 span duration-500" />
                    </div>
                  </Btn>
                  <Link href={`/post/${id}`}>
                    <a>
                      <Btn className="rounded-md ml-1">
                        <div className="border border-[#3d5eff] text-[#3d5eff] duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins dark:border-[#555] dark:text-white">
                          {data.comments.length}
                          <FiMessageCircle className="text-sm ml-1 span duration-500" />
                        </div>
                      </Btn>
                    </a>
                  </Link>
                  <a href={website_url} target="_blank" className="ml-1">
                    <Btn>
                      <div className="text-[#3d5eff] dark:text-white duration-500 px-2 py-3 h-full text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
                        <FiExternalLink className="text-sm span duration-500" />
                      </div>
                    </Btn>
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Item;
