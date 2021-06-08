import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";
import { FiMail, FiTwitter } from "react-icons/fi";
import { Btn } from "..";

const RightBar = ({ currentPost }) => {
  const { upvotes, website_url, cheatsheet_name, twitter_handle } =
    currentPost.length > 0 && currentPost[0];

  console.log(upvotes);
  return (
    currentPost.length > 0 &&
    currentPost[0] && (
      <div className="w-4/12 h-[90vh] rounded-md white-light-shadow mx-4 fixed right-0 top-[5vh] flex items-center justify-between flex-col">
        <div className="py-4 px-3 w-full">
          {twitter_handle && (
            <>
              <h1 className="text-lg font-bold text-[#ECF2F5]">From</h1>
              <a
                className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200"
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
                  <h2 className="font-semibold text-lg text-[#222] hover:text-[#3d5eff] cheatsheet-continuous-line">
                    {twitter_handle}
                  </h2>
                  <div className="text-xs text-[#3d5eff] flex">
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
              <div className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200">
                <img
                  src={`https://unavatar.vercel.app/${currentPost[0].addedby.email}`}
                  alt=""
                  className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
                />
                <div className="ml-2">
                  <h2 className="font-semibold text-lg text-[#222] hover:text-[#3d5eff] cheatsheet-continuous-line">
                    {currentPost[0].addedby.displayName
                      ? currentPost[0].addedby.displayName
                      : "Anonymous"}
                  </h2>
                  <div className="text-xs text-[#444] flex">
                    {currentPost[0].addedby.email}
                    <FiMail className="ml-1 hover:text-[#333]" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-lg font-bold text-[#ECF2F5] mt-3">
                Added By
              </h1>
              <div className="bg-[#ECF2F5] rounded-md border border-[#ddd] p-2 flex items-center hover:bg-white duration-200">
                <img
                  src="https://avatars.githubusercontent.com/saviomartin"
                  alt=""
                  className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
                />
                <div className="ml-2">
                  <h2 className="font-semibold text-lg text-[#222] hover:text-[#3d5eff] cheatsheet-continuous-line">
                    Savio Martin
                  </h2>
                  <div className="text-xs text-[#444] flex">
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
          <div className="flex">
            <Btn className="!p-0 !w-auto !h-auto !m-0">
              <button className="bg-[#1DA1F2] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                Twitter
                <FaTwitter className="text-lg ml-1" />
              </button>
            </Btn>
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#F34423] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                Reddit
                <FaRedditAlien className="text-lg ml-1 -mt-1" />
              </button>
            </Btn>
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#3F5793] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                Facebook
                <FaFacebookSquare className="text-lg ml-1" />
              </button>
            </Btn>
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#0375B4] text-white font-semibold py-2 px-3 rounded focus:outline-none focus:shadow-outline shine flex items-center text-sm">
                LinkedIn
                <FaLinkedin className="text-lg ml-1" />
              </button>
            </Btn>
          </div>
        </div>
      </div>
    )
  );
};

export default RightBar;
