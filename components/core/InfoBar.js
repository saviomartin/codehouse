import React, { useEffect, useState } from "react";

// axios for data fetching
import axios from "axios";

// icons
import {
  FiAirplay,
  FiBookmark,
  FiFlag,
  FiSend,
  FiTriangle,
} from "react-icons/fi";
import { BsFillBookmarkFill } from "react-icons/bs";

// componenents
import { Comment } from "../index";

// material design
import { Button } from "@material-ui/core";

// fetching and editing db
import { harperFetch } from "../../utils/HarperFetch";

// link
import Link from "next/link";

const InfoBar = ({
  currentPost,
  bookmarks,
  fetchBookmarks,
  user,
  setOpen,
  fetchAgain,
  setFetchAgain,
  review = false,
}) => {
  const [meta, setMetadata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // checking states
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isBookMarked, setIsBookMarked] = useState(false);

  // text for comment
  const [text, setText] = useState("");

  // destructuring currentPost[0]
  const { id, cheatsheet_name, website_url, upvotes, comments } =
    currentPost.length > 0 && currentPost[0];

  // fetching bookmarked cheatsheets and check if already bookmarked or not
  const fetchBookmarkedCheatsheets = () => {
    if (bookmarks.some((cheatsheet) => cheatsheet.id === id)) {
      setIsBookMarked(true);
    } else {
      setIsBookMarked(false);
    }
  };

  // use effect to handle it
  useEffect(() => {
    fetchBookmarkedCheatsheets();
  }, [bookmarks]);

  useEffect(() => {
    // normal state
    setMetadata([]);

    // fetching state
    axios
      .get(
        `https://meta-scrapper-api.herokuapp.com/api?url=${
          website_url && website_url
        }`
      )
      .then(async (response) => {
        setLoading(false);
        setMetadata(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [website_url]);

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

        harperFetch({
          operation: "update",
          schema: "dev",
          table: review ? "review" : "cheatsheets",
          records: [
            {
              id: id,
              upvotes: upvotes,
            },
          ],
        });

        // fetch date again with new content
        setFetchAgain(fetchAgain + 1);
      } else {
        // upvoting
        harperFetch({
          operation: "update",
          schema: "dev",
          table: review ? "review" : "cheatsheets",
          records: [
            {
              id: id,
              upvotes: [...upvotes, user.email],
            },
          ],
        });

        // fetch date again with new content
        setFetchAgain(fetchAgain + 1);
      }
    } else {
      // showing sign in popup is user not found
      setOpen(true);
    }
  };

  // geting URL with URL API
  const url =
    currentPost.length > 0 &&
    currentPost[0] &&
    new URL(website_url && website_url);

  // generating image for thumbnail
  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg"; // not found image
    }
  };

  // bookmarking a cheatsheet
  const bookmarkCheatsheet = () => {
    if (typeof window !== "undefined") {
      if (isBookMarked) {
        // removing bookmark
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

  // send comment
  const sendComment = () => {
    if (user.email) {
      if (text.replace(/\s/g, "") === "") {
        console.log("type something..."); // checking if any text is there
      } else {
        // adding comment
        harperFetch({
          operation: "update",
          schema: "dev",
          table: review ? "review" : "cheatsheets",
          records: [
            {
              id: id,
              comments: [
                ...comments,
                {
                  name: user.displayName ? user.displayName : "",
                  photoURL: user.photoURL ? user.photoURL : "",
                  comment: text,
                  email: user.email,
                  time: new Date().getTime(),
                },
              ],
            },
          ],
        });
      }

      // fetch date again with new content
      setFetchAgain(fetchAgain + 1);

      // normal state
      setText("");
    } else {
      // showing sign in popup is user not found
      setOpen(true);
    }
  };

  return (
    <div className="w-full lg:w-[65%] xl:w-[65%] h-full min-h-[90vh] bg-white rounded-md white-light-shadow border border-[#ddd] p-7 dark:bg-[#1F1F1F] dark:border-[#555] dark:text-white">
      {loading ? (
        <>
          <div className="h-[325px] pulsate w-full rounded-md"></div>
          <div className="h-[10px] pulsate w-3/12 rounded-sm mt-6"></div>
          <div className="h-[40px] pulsate w-10/12 rounded-md mt-2"></div>
          <div className="h-[10px] pulsate w-full rounded-sm mt-2"></div>
          <div className="flex w-full mt-8">
            <div className="h-[40px] pulsate w-[200px] rounded-md mr-1"></div>
            <div className="h-[40px] pulsate w-[200px] rounded-md mr-1"></div>
          </div>
        </>
      ) : (
        <>
          <img
            src={meta.og && image()}
            alt=""
            className="rounded-md w-full mb-4 max-h-[375px]"
          />
          <a
            className="text-blue-500 text-base lg:text-lg xl:text-lg"
            href={url.protocol && url.hostname && url.protocol + url.hostname}
            target="_blank"
          >
            {url.hostname && url.hostname}
          </a>
          <br />
          <a
            className="font-bold text-2xl lg:text-3xl xl:text-3xl continuous-line hover:text-[#3d5eff]"
            href={website_url}
          >
            {cheatsheet_name}
          </a>
          <p className="text-[#666] mt-1 dark:text-[#aaa] text-sm lg:text-base">
            {meta.meta && meta.meta.description
              ? meta.meta.description.slice(0, 150)
              : "Description not found"}
          </p>
          <div className="flex mt-4 h-full items-start justify-between">
            <div className="flex">
              <Button className="!p-0 !w-auto !h-auto !m-0">
                <div
                  className={`${
                    isUpvoted
                      ? "bg-[#3d5eff] text-white shine"
                      : "border border-[#3d5eff] text-[#3d5eff] duration-500 hover:bg-[#3d5eff] hover:text-white dark:border-[#777] dark:text-[#ddd] dark:bg-[#2f2f2f]"
                  } px-3 lg:px-5 xl:px-5 py-[8px] text-md lg:text-lg xl:text-lg capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover`}
                  onClick={upvoteCheatSheet}
                >
                  {upvotes && upvotes.length} Upvotes
                  <FiTriangle className="text-lg ml-1 -mt-1 span" />
                </div>
              </Button>
              <Button
                className="!p-0 !w-auto !h-auto !m-0 !ml-1"
                href={website_url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="border border-[#3d5eff] text-[#3d5eff] hover:bg-[#3d5eff] duration-500 hover:text-white px-3 lg:px-5 xl:px-5 py-[8px] text-md lg:text-lg xl:text-lg capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover dark:border-[#777] dark:text-[#ddd] dark:bg-[#2f2f2f]">
                  Visit Website
                  <FiAirplay className="text-lg ml-1 span !duration-500" />
                </div>
              </Button>
              <div
                className="p-2 py-3 text-[#F5BA31] duration-500 text-xl capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins cursor-pointer"
                onClick={bookmarkCheatsheet}
              >
                {isBookMarked ? (
                  <BsFillBookmarkFill className="text-md span duration-500" />
                ) : (
                  <FiBookmark className="text-md span duration-500" />
                )}
              </div>
            </div>
            <Link href={`/report-post?id=${id}&website_url=${website_url}`}>
              <a>
                <Button className="!p-0 !w-auto !h-auto !m-0 !ml-1">
                  <div className="duration-500 px-3 lg:px-5 xl:px-5 py-[8px] text-md lg:text-lg xl:text-lg capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover border dark:border-[#777] dark:text-[#ddd] text-[#3d5eff] bg-[#eee] dark:bg-[#2f2f2f] border-[#ddd]">
                    Report
                    <FiFlag className="text-lg ml-1 span !duration-500" />
                  </div>
                </Button>
              </a>
            </Link>
          </div>
          <div className="w-full bg-[#ddd] h-[1.25px] my-4 rounded-md dark:bg-[#555]"></div>

          <h1 className="font-semibold text-lg lg:text-xl xl:text-xl text-[#555] dark:text-[#ccc]">
            Comments ({comments && comments.length})
          </h1>

          <div className="flex border border-[#3d5eff] hover:border-[#445ac5] duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between my-2">
            <input
              type="text"
              placeholder="Add Your Comment"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  sendComment();
                }
              }}
              className="h-full py-1 pl-1 w-full bg-transparent"
            />
            <div
              className="bg-[#3d5eff] p-3 pr-4 cursor-pointer shine rounded-lg"
              onClick={sendComment}
            >
              <FiSend
                className="text-white"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </div>

          {comments &&
            comments.map((comment, key) => (
              <Comment key={key} comment={comment} />
            ))}
        </>
      )}
    </div>
  );
};

export default InfoBar;
