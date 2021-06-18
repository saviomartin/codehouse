import React from "react";

// icons
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";
import { FiMail, FiTwitter } from "react-icons/fi";

// components
import { Btn } from "..";

const RightBar = ({ currentPost }) => {
  // destructuring currentPost[0]
  const { upvotes, website_url, cheatsheet_name, twitter_handle } =
    currentPost.length > 0 && currentPost[0];

  // intent link for twitter
  const twitterLink =
    currentPost.length > 0 &&
    currentPost[0] &&
    `https://twitter.com/intent/tweet?text=${cheatsheet_name}${
      twitter_handle && "from%20@" + twitter_handle
    }%20via%20codehouse.vercel.app%20by%20@SavioMartin7%0A%0A%23DEVCommunity%20%23100DaysOfCode%20%20%23CodeNewbie%0A${website_url}`;

  // intent link for facbook
  const facebookLink =
    currentPost.length > 0 &&
    currentPost[0] &&
    `https://www.facebook.com/sharer/sharer.php?u=${website_url}`;

  // intent link for linkedin
  const linkedInLink =
    currentPost.length > 0 &&
    currentPost[0] &&
    `https://www.linkedin.com/cws/share?url=${website_url}`;

  // intent link for reddit
  const redditLink =
    currentPost.length > 0 &&
    currentPost[0] &&
    `http://www.reddit.com/submit?url=${website_url}&title=${cheatsheet_name}`;

  return (
    currentPost.length > 0 &&
    currentPost[0] && (
      <div className="w-full lg:w-4/12 xl:w-4/12 h-auto lg:h-[90vh] xl:h-[90vh] rounded-md white-light-shadow mx-0 lg:mx-4 xl:mx-4 sticky top-0 right-0 flex items-center justify-between flex-col">
        <div className="py-4 px-3 w-full">
          {twitter_handle && (
            <>
              <h1 className="text-lg font-bold text-[#ECF2F5]">From</h1>
              <a
                className="bg-[#ECF2F5] rounded-md border border-[#ddd] dark:bg-[#1F1F1F] dark:border-[#555] p-2 flex items-center hover:bg-white duration-200"
                href={`https://twitter.com/${twitter_handle}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={`https://unavatar.vercel.app/twitter/${twitter_handle}`}
                  alt={twitter_handle}
                  className="h-[50px] w-[50px] rounded-md white-light-shadow"
                />
                <div className="ml-2">
                  <h2 className="font-semibold text-lg text-[#222] hover:text-[#3d5eff] cheatsheet-continuous-line dark:text-[#ddd]">
                    {twitter_handle}
                  </h2>
                  <div className="text-xs text-[#3d5eff] dark:text-blue-400 flex">
                    twitter.com/{twitter_handle}
                    <FiTwitter className="ml-1 hover:text-[#333]" />
                  </div>
                </div>
              </a>
            </>
          )}
          {currentPost &&
          currentPost.length > 0 &&
          currentPost[0] &&
          currentPost[0].addedby ? (
            <>
              <h1 className="text-lg font-bold text-[#ECF2F5] mt-3">
                Added By
              </h1>
              <div className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200 dark:bg-[#1F1F1F] dark:border-[#555]">
                <img
                  src={
                    currentPost[0].addedby.photoURL
                      ? currentPost[0].addedby.photoURL
                      : `https://unavatar.vercel.app/${currentPost[0].addedby.email}`
                  }
                  alt=""
                  className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
                />
                <div className="ml-2">
                  <h2 className="font-semibold text-lg text-[#222] dark:text-[#ddd] hover:text-[#3d5eff] cheatsheet-continuous-line">
                    {currentPost[0].addedby.displayName
                      ? currentPost[0].addedby.displayName
                      : "Anonymous"}
                  </h2>
                  <div className="text-xs text-[#444] dark:text-[#aaa] flex">
                    {currentPost[0].addedby.email
                      ? currentPost[0].addedby.email
                      : "anonymous"}
                    <FiMail className="ml-1 hover:text-[#333] dark:hover:text-white" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-lg font-bold text-[#ECF2F5] mt-3">
                Added By
              </h1>
              <div className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200 dark:bg-[#1F1F1F] dark:border-[#555]">
                <img
                  src="https://avatars.githubusercontent.com/saviomartin"
                  alt=""
                  className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
                />
                <div className="ml-2">
                  <h2 className="font-semibold text-lg text-[#222] dark:text-[#ddd] hover:text-[#3d5eff] cheatsheet-continuous-line">
                    Savio Martin
                  </h2>
                  <div className="text-xs text-[#444] dark:text-[#aaa] flex">
                    saviomartin2007@gmail.com
                    <FiMail className="ml-1 hover:text-[#333]" />
                  </div>
                </div>
              </div>
            </>
          )}

          <h1 className="text-lg font-bold text-[#ECF2F5] mt-3">
            Upvotes ({upvotes.length})
          </h1>
          <div className="flex mt-1 flex-wrap">
            {upvotes.slice(0, 20).map((email, key) => (
              <img
                src={`https://unavatar.vercel.app/${email}`}
                alt={email}
                key={key}
                className="h-[27px] w-[27px] mr-[2px] rounded-md pixelated white-light-shadow m-[2px]"
              />
            ))}
          </div>
        </div>
        <div className="py-4 px-3 w-full">
          <h1 className="text-lg font-bold text-[#ECF2F5] mb-1">
            Share Cheatsheet
          </h1>
          <div className="flex flex-wrap">
            <a href={twitterLink} rel="noreferrer" target="_blank">
              <Btn className="!p-0 !w-auto !h-auto !m-0">
                <button className="bg-[#1DA1F2] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                  Twitter
                  <FaTwitter className="text-lg ml-1" />
                </button>
              </Btn>
            </a>
            <a href={redditLink} rel="noreferrer" target="_blank">
              <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
                <button className="bg-[#F34423] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                  Reddit
                  <FaRedditAlien className="text-lg ml-1 -mt-1" />
                </button>
              </Btn>
            </a>
            <a href={facebookLink} rel="noreferrer" target="_blank">
              <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
                <button className="bg-[#3F5793] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                  Facebook
                  <FaFacebookSquare className="text-lg ml-1" />
                </button>
              </Btn>
            </a>
            <a href={linkedInLink} rel="noreferrer" target="_blank">
              <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
                <button className="bg-[#0375B4] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                  LinkedIn
                  <FaLinkedin className="text-lg ml-1" />
                </button>
              </Btn>
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default RightBar;
