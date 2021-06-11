import React from "react";
import Btn from "./Btn";

// icons
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRedditAlien,
  FaTwitter,
} from "react-icons/fa";

const Banner = ({ text, website_url }) => {
  // intent link for twitter
  const twitterLink = `https://twitter.com/intent/tweet?text=${text}%0A%20{%20from%20@zackdotcomputer%20}%20via%20codehouse.vercel.app%20by%20@SavioMartin7%0A%0A%23DEVCommunity%20%23100DaysOfCode%20%20%23CodeNewbie%0A${website_url}`;

  // intent link for facbook
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${website_url}`;

  // intent link for linkedin
  const linkedInLink = `https://www.linkedin.com/cws/share?url=${website_url}`;

  // intent link for reddit
  const redditLink = `http://www.reddit.com/submit?url=${website_url}&title=${text}`;
  return (
    <div className="w-full px-3 py-6 my-2 relative flex items-center">
      <img
        src="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
        alt=""
        className="h-[160px] max-w-[260px] rounded-md"
      />
      <div className="block ml-5">
        <h1 className="text-4xl font-bold capitalize text-[#222]">
          {text} Cheatsheets
        </h1>
        <p className="text-[#666]">
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
  );
};

export default Banner;
