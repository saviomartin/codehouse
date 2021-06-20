import React, { useEffect, useState } from "react";

// link from next
import Link from "next/link";

// material design
import { Button } from "@material-ui/core";

// icons
import { FiGithub } from "react-icons/fi";

// components
import { BmcButton, TwitterBtn } from "..";
import axios from "axios";

const Footer = () => {
  const [starCount, setStarCount] = useState(1);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/saviomartin/gradientking", {
        headers: {},
      })
      .then((response) => {
        setStarCount(response.data.stargazers_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetch on load once
  useEffect(() => {
    fetchStarCount();
  }, []);

  return (
    <div className="bg-app-gradient-2">
      <div className="w-full footer-pattern p-3 flex flex-col lg:flex-row xl:flex-row items-center justify-between border-t border-[#B84F90]">
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
        <div className="hidden lg:flex xl:flex">
          <Button
            className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
            href="https://github.com/saviomartin/codehouse"
            target="_blank"
            rel="noreferrer"
          >
            <div className="bg-[#ffcf5e] px-3 py-2 capitalize rounded-md font-semibold flex items-center justify-center">
              Stars <span className="poppins ml-1">{starCount}</span>
              <FiGithub className="text-lg ml-1" />
            </div>
          </Button>
          <TwitterBtn />
          <BmcButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
