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
    <div className="w-full px-3 py-6 mb-0 lg:mb-2 my-2 relative flex items-center justify-center flex-col md:flex-row lg:flex-row xl:flex-row">
      <img
        src={image_url}
        alt={text}
        className="h-[130px] lg:h-[160px] w-[200px] lg:w-[260px] rounded-md pixelated"
      />
      <div className="block ml-2 lg:ml-5 mt-2 lg:mt-0 text-center animate__animated animate__fadeInUp">
        <h1 className="text-2xl lg:text-4xl font-bold capitalize text-[#222] dark:text-[#ddd]">
          {text} Cheatsheets
        </h1>
        <p className="text-[#666] dark:text-[#aaa] text-sm lg:text-base">
          Curated list of {text} cheatsheets! Enjoy 🥳
        </p>
        <div className="flex mt-3 ">
          <a href={twitterLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0">
              <button className="bg-[#1DA1F2] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                Twitter
                <FaTwitter className="text-base lg:text-lg ml-1" />
              </button>
            </Btn>
          </a>
          <a href={redditLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#F34423] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                Reddit
                <FaRedditAlien className="text-base lg:text-lg ml-1 -mt-1" />
              </button>
            </Btn>
          </a>
          <a href={facebookLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#3F5793] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                Facebook
                <FaFacebookSquare className="text-base lg:text-lg ml-1" />
              </button>
            </Btn>
          </a>
          <a href={linkedInLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#0375B4] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                LinkedIn
                <FaLinkedin className="text-base lg:text-lg ml-1" />
              </button>
            </Btn>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full py-6 my-2 relative flex items-center justify-center">
      <div className="block ml-5 text-center animate__animated animate__fadeInUp">
        <a
          className="text-2xl lg:text-4xl font-bold text-blue-600 continuous-line dark:text-blue-400"
          href={`https://${text}`}
          target="_blank"
        >
          {text}
        </a>
        <p className="text-[#666] mt-3 dark:text-[#aaa] text-xs lg:text-base">
          Curated list of cheatsheets from {text}! Enjoy 🥳
        </p>
        <div className="flex mt-3 ">
          <a href={twitterLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0">
              <button className="bg-[#1DA1F2] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                Twitter
                <FaTwitter className="text-base lg:text-lg ml-1" />
              </button>
            </Btn>
          </a>
          <a href={redditLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#F34423] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                Reddit
                <FaRedditAlien className="text-base lg:text-lg ml-1 -mt-1" />
              </button>
            </Btn>
          </a>
          <a href={facebookLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#3F5793] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                Facebook
                <FaFacebookSquare className="text-base lg:text-lg ml-1" />
              </button>
            </Btn>
          </a>
          <a href={linkedInLink} rel="noreferrer" target="_blank">
            <Btn className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <button className="bg-[#0375B4] text-white font-semibold p-2 rounded focus:outline-none focus:shadow-outline shine flex items-center text-xs lg:text-sm">
                LinkedIn
                <FaLinkedin className="text-base lg:text-lg ml-1" />
              </button>
            </Btn>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
