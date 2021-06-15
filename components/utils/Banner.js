import React from "react";

// material design
import Btn from "./Btn";

// icons
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";

const Banner = ({ text, website_url, image_url }) => {
  // intent link for twitter
  const twitterLink = `https://twitter.com/intent/tweet?text=Enjoying%20these%20amazing%20${text}%20cheatsheets,%20come%20join%20me%20on%20${website_url}%20by%20@SavioMartin7%0A%0A%23DEVCommunity%20%23100DaysOfCode`;

  // intent link for facbook
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${website_url}`;

  // intent link for linkedin
  const linkedInLink = `https://www.linkedin.com/cws/share?url=${website_url}`;

  // intent link for reddit
  const redditLink = `http://www.reddit.com/submit?url=${website_url}&title=${text}`;

  return image_url ? (
    <div className="w-full px-3 py-6 my-2 relative flex items-center justify-center">
      <img
        src={image_url}
        alt={text}
        className="h-[160px] w-[260px] rounded-md pixelated"
      />
      <div className="block ml-5">
        <h1 className="text-4xl font-bold capitalize text-[#222] dark:text-[#ddd]">
          {text} Cheatsheets
        </h1>
        <p className="text-[#666] dark:text-[#aaa]">
          Curated list of {text} cheatsheets! Enjoy 🥳
        </p>
        <div className="flex mt-3">
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
  ) : (
    <div className="w-full py-6 my-2 relative flex items-center justify-center">
      <div className="block ml-5 text-center">
        <a
          className="text-4xl font-bold text-blue-600 continuous-line dark:text-blue-400"
          href={`https://${text}`}
          target="_blank"
        >
          {text}
        </a>
        <p className="text-[#666] mt-3 dark:text-[#aaa]">
          Curated list of cheatsheets from {text}! Enjoy 🥳
        </p>
        <div className="flex mt-3 items-center justify-center">
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
  );
};

export default Banner;
