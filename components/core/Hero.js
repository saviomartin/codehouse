import React, { useEffect, useState } from "react";

// material design
import { Button } from "@material-ui/core";

// icons
import { BsFillPlayFill, BsLightning } from "react-icons/bs";
import {
  FiBookmark,
  FiCloudLightning,
  FiDatabase,
  FiFlag,
  FiFolderPlus,
  FiGithub,
  FiLayers,
  FiMoon,
  FiPackage,
  FiPlay,
  FiRss,
  FiUsers,
} from "react-icons/fi";

// link
import Link from "next/link";

// components
import { Header } from "..";

import Parallax from "parallax-js";
import FeatureComponent from "../utils/FeatureComponent";

import axios from "axios"; // axios
import YTModal from "./YTModal";

const Hero = ({ setOpen, user, setUser }) => {
  const [starCount, setStarCount] = useState(1);
  const [showYt, setShowYt] = useState(false);

  const fetchStarCount = () => {
    axios
      .get("https://api.github.com/repos/saviomartin/codehouse", {
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

  // useEffect(() => {
  //   var scene = document.getElementById("scene");
  //   var parallaxInstance = new Parallax(scene);
  // });

  const features = [
    {
      name: "300+ Cheatsheets",
      description:
        "Code house is super huge enough and have more than 300+ cheatsheets",
      icon: <FiPackage className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Category Filter",
      description:
        "Feel free to filter using categories, it can help you find the best one.",
      icon: <FiLayers className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Filter By Source",
      description:
        "You can filter cheatsheets by source, eg: medium.com or overapi.com",
      icon: <FiRss className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Bookmark Favorites",
      description: "You can bookmark cheatsheets for you to have a look later.",
      icon: <FiBookmark className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Request Features",
      description:
        "You can help us become code house better by adding your feature requests.",
      icon: <FiCloudLightning className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Contributors Page",
      description:
        "We proudly show our contributors, there is a dedicated contributors page.",
      icon: <FiUsers className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Add new Cheatsheet",
      description:
        "You can add a new cheatsheet to code house, without even leaving the browser",
      icon: <FiFolderPlus className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Report Cheatsheet",
      description: "You can report a cheatsheet if you find it suspicious. ",
      icon: <FiFlag className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "GraphQL Playground",
      description: "A dedicated Graphql playground to access code house API",
      icon: <FiDatabase className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
    {
      name: "Dark Mode",
      description: "Coders love dark mode, so you can enjoy it here too.",
      icon: <FiMoon className="text-2xl lg:text-4xl xl:text-4xl" />,
    },
  ];

  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  });

  return (
    <div className="min-h-screen bg-image w-full text-[#ECF2F5] overflow-visible z-10">
      <Header setOpen={setOpen} user={user} setUser={setUser} />
      <YTModal open={showYt} setOpen={setShowYt} />
      <div className="flex items-center justify-center h-auto min-h-[90vh] lg:h-[90vh] xl:h-[90vh] w-full flex-col lg:flex-row xl:flex-row overflow-hidden">
        <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-start justify-center flex-col pl-4 lg:pl-10 xl:pl-10 relative z-10 py-4 lg:py-0 xl:py-0 overflow-hidden animate__animated animate__fadeInLeft">
          <h3 className="text-sm lg:text-base xl:text-base bg-text-gradient font-bold mb-2 uppercase tracking-wider">
            300+ CheatSheets. Sorting. Open Source. Categories.
          </h3>
          <h1 className="font-bold text-3xl lg:text-[2.75rem] xl:text-[2.75rem] lg:leading-[3rem]">
            World biggest storehouse of developer cheatsheets
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
                Stars <span className="poppins ml-1">{starCount}</span>
                <FiGithub className="text-lg ml-1" />
              </div>
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-6/12 h-auto lg:h-full xl:h-full flex items-center justify-center flex-col relative bg-pattern-hero pb-10 lg:pb-0 xl:pb-0 animate__animated animate__fadeInRight">
          <div className="absolute h-full w-full flex items-center justify-center">
            <img
              src="/assets/icon.svg"
              className="w-[320px] lg:w-[450px] xl:w-[450px] opacity-50 lg:opacity-100 xl:opacity-100"
            />
          </div>
          <div className="relative flex items-center justify-center">
            <div className="flex">
              <div id="scene">
                <img
                  data-depth="0.3"
                  src="/assets/codehouse-banner.png"
                  className="h-[189px] lg:h-[315px] w-[336px] lg:w-[560px] rounded-md border border-[#B84F90]"
                />
              </div>
              <div
                className="bg-image rounded-full p-4 absolute absolute-center transform duration-500 hover:scale-125 cursor-pointer border border-[#F5BA32]"
                onClick={() => setShowYt(true)}
              >
                <BsFillPlayFill className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full flex items-center justify-center p-7">
        <div className="h-auto min-h-[80vh] w-full rounded-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-wrap border border-[#B84F90]">
          <div className="flex flex-wrap w-full justify-center mt-10">
            {features.map((feature, key) => (
              <FeatureComponent
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
                key={key}
              />
            ))}
          </div>
          <div
            className="w-full p-7 mt-10 mb-5 flex flex-col lg:flex-row xl:flex-row"
            id="how-it-works"
          >
            <div className="w-full lg:w-4/12 xl:w-4/12" data-aos="fade-left">
              <h3 className="text-sm lg:text-lg xl:text-lg bg-text-gradient font-bold mb-2 uppercase tracking-wider">
                How it works
              </h3>
              <h1 className="text-lg lg:text-2xl xl:text-2xl font-semibold">
                3 easy steps to be a contributor and help code house grow 🎉
              </h1>
              <Link href="/app">
                <a>
                  <Button className="!p-0 !w-auto !h-auto !m-auto shine !mt-4">
                    <div className="bg-[#F5BA31] px-5 py-[7px] capitalize rounded-md font-semibold flex items-center justify-center">
                      Try Now!
                      <BsLightning className="text-lg ml-1 -mt-1" />
                    </div>
                  </Button>
                </a>
              </Link>
            </div>
            <div
              className="w-full lg:w-8/12 xl:w-8/12 flex items-start justify-center pt-7 flex-col lg:flex-row xl:flex-row"
              data-aos="fade-left"
            >
              <div className="w-full lg:w-[28%] xl:w-[28%] my-3 lg:my-0 xl:my-0 lg:mx-3 xl:mx-3">
                <div className="flex w-full items-center">
                  <h3 className="font-bold text-2xl">1</h3>
                  <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ECF2F580]"></div>
                </div>
                <h3 className="text-sm lg:text-lg xl:text-lg">
                  Join Code House, sign In using google or github.
                </h3>
              </div>
              <div className="w-full lg:w-[28%] xl:w-[28%] my-3 lg:my-0 xl:my-0 lg:mx-3 xl:mx-3">
                <div className="flex w-full items-center">
                  <h3 className="font-bold text-2xl">2</h3>
                  <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ECF2F580]"></div>
                </div>
                <h3 className="text-sm lg:text-lg xl:text-lg">
                  Add a new cheatsheet if you have found one.
                </h3>
              </div>
              <div className="w-full lg:w-[28%] xl:w-[28%] my-3 lg:my-0 xl:my-0 lg:mx-3 xl:mx-3">
                <div className="flex w-full items-center">
                  <h3 className="font-bold text-2xl">3</h3>
                  <div className="w-full rounded-sm h-[1px] ml-2 bg-[#ECF2F580]"></div>
                </div>
                <h3 className="text-[0.9rem]">
                  Your cheatsheet will be reviewed and added to the app, also
                  see yourself in contributors.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
