import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { FiGithub, FiTwitter } from "react-icons/fi";

const Footer = () => {
  const twitterLink =
    "https://twitter.com/intent/tweet?text=Checkout%20codehouse.vercel.app%20by%20@SavioMartin7%0A%0AMore%20than%20300%20developer%20cheatsheets%20all%20in%20one%20place,%20with%20more%20amazing%20features.%20You%27ll%20love%20it!%F0%9F%94%A5%0A%0A%23DEVCommunity";
  return (
    <div className="bg-app-gradient-2">
      <div className="w-full footer-pattern p-3 flex items-center justify-between border-t border-[#B84F90]">
        <h3 className="text-white font-normal">
          Another App from{" "}
          <a
            className="font-bold border-b-2 continuous-line hover:text-[#F5BA32] border-[#F5BA32]"
            href="http://twitter.com/saviomartin7"
            target="_blank"
            rel="noreferrer"
          >
            Savio Martin
          </a>{" "}
          and{" "}
          <Link href="/contributors">
            <a className="font-bold border-b-2 continuous-line hover:text-[#F5BA32] border-[#F5BA32]">
              Friends
            </a>
          </Link>
        </h3>
        <div className="flex">
          <Button
            className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
            href="https://github.com/saviomartin/codehouse"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#ffcf5e] px-3 py-2 capitalize rounded-md font-semibold flex items-center justify-center">
              Stars <span className="poppins ml-1">67</span>
              <FiGithub className="text-lg ml-1" />
            </div>
          </Button>
          <Button
            className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
            href={twitterLink}
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#1A91DA] hover:bg-[#0F84B4] px-3 py-2 capitalize rounded-md font-semibold flex items-center justify-center text-white">
              Share to Twitter
              <FiTwitter className="text-lg ml-1" />
            </div>
          </Button>
          <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-1">
            <a href="https://www.buymeacoffee.com/saviomartin" target="_blank">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                className="h-10"
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
