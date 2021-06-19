import React, { useEffect } from "react";

// material design
import { Button } from "@material-ui/core";

// icons
import { BsLightning } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

// link
import Link from "next/link";

// components
import { Header } from "..";

import Parallax from "parallax-js";

const Hero = ({ setOpen, user, setUser }) => {
  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  });

  return (
    <div className="min-h-screen bg-image w-full text-[#ECF2F5] overflow-visible z-10">
      <Header setOpen={setOpen} user={user} setUser={setUser} />
      <div className="flex items-center justify-center h-auto min-h-[90vh] lg:h-[90vh] xl:h-[90vh] w-full flex-col lg:flex-row xl:flex-row overflow-hidden">
        <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-start justify-center flex-col pl-4 lg:pl-10 xl:pl-10 relative z-10 py-4 lg:py-0 xl:py-0 overflow-hidden">
          <h3 className="text-sm lg:text-base xl:text-base bg-text-gradient font-bold mb-2 uppercase tracking-wider">
            300+ CheetSheets. Sorting. Open Source. Categories.
          </h3>
          <h1 className="font-bold text-3xl lg:text-[2.75rem] xl:text-[2.75rem] lg:leading-[3rem]">
            Worl'd biggest storehouse of developer cheetsheets
          </h1>
          <p className="text-light text-[#aaa] my-2 mt-3 text-xs lg:text-sm xl:text-sm">
            Code House is the all in one storehouse for developer cheatsheets.
            Code House is made up of 300+ curated cheatsheets from 230+ sources.
            Filter by categories, or source, sort by time or popularity, dark
            mode, bookmark cheatsheets, add new cheatsheets, request feature,
            and much more features, make the app amazing! 🤟
          </p>
          <div className="flex mt-2">
            <Link href="/app">
              <a>
                <Button className="!p-0 !w-auto !h-auto !m-auto shine">
                  <div className="bg-[#F5BA31] px-5 py-[10px] lg:text-lg xl:text-lg capitalize rounded-md font-semibold flex items-center justify-center">
                    Try Now!
                    <BsLightning className="text-lg ml-1 -mt-1" />
                  </div>
                </Button>
              </a>
            </Link>
            <Button
              className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
              href="https://github.com/saviomartin/codehouse"
              target="_blank"
              rel="noreferrer"
            >
              <div className="border-2 border-[#777] text-[#ffcf5e] px-4 py-[8px] lg:text-lg xl:text-lg capitalize rounded-md font-semibold flex items-center justify-center">
                Stars <span className="poppins ml-1">67</span>
                <FiGithub className="text-lg ml-1" />
              </div>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-center justify-center flex-col relative bg-pattern-hero pb-10 lg:pb-0 xl:pb-0">
          <div className="absolute h-full w-full flex items-center justify-center">
            <img
              src="/assets/icon.svg"
              className="w-[320px] lg:w-[450px] xl:w-[450px] opacity-50 lg:opacity-100 xl:opacity-100"
            />
          </div>
          <div id="scene">
            <iframe
              src="https://www.youtube.com/embed/gdZLi9oWNZg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="relative h-[189px] lg:h-[315px] w-[336px] lg:w-[560px]"
              data-depth="0.3"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
