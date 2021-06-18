import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  ContributorCard,
  GithubCard,
  SvgBanner,
  MainHeader,
} from "../components";
import { harperFetch } from "../utils/HarperFetch";

const contributors = (props) => {
  const [githubContributors, setGithubContributors] = useState([]);
  const [webContributors, setWebContributors] = useState([]);

  const fetchContributors = () => {
    axios
      .get(
        "https://api.github.com/repos/saviomartin/gradientking/contributors",
        {
          headers: {},
        }
      )
      .then((response) => {
        setGithubContributors(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(async () => {
    // fetching
    const contributors = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.contributors",
    });

    // obtaining data
    setWebContributors(contributors);
    fetchContributors();
  }, []);

  return (
    <div className="bg-[#ECF2F5] dark:bg-[#2F2F2F] h-full w-full overflow-visible min-h-screen">
      <MainHeader {...props} />
      <Head>
        <title>Contributors - Code House</title>
      </Head>
      <SvgBanner
        text="Contributors"
        description="A big thanks to all contributors who helped code house grow and help many! Thank you! Keep helps us grow! 🙏"
        image_url="/assets/3d/contributors.png"
      />

      <div className="flex justify-center w-full">
        <div className="w-10/12 py-2">
          <div className="w-full flex px-3 my-2 mt-3 items-center">
            <div className="w-1/12 h-[1px] rounded-sm bg-[#bbb] dark:bg-[#555]"></div>
            <h3 className="mx-2 text-[#555] capitalize dark:text-[#ddd] font-bold text-lg w-auto">
              Github Contributors
            </h3>
            <div className="w-8/12 h-[1px] rounded-sm bg-[#bbb] dark:bg-[#555]"></div>
          </div>
          <div className="w-full flex flex-wrap items-center justify-center">
            {githubContributors.length > 0 ? (
              githubContributors.map((contributor, key) => (
                <GithubCard contributor={contributor} key={key} />
              ))
            ) : (
              <div className="p-5 gradient-shadow bg-white m-3 rounded-md transition cursor-pointer text-[#222] dark:bg-[#222222] dark:border-[#444] w-full lg:w-[20%] xl:w-[20%] md:w-[40%] border border-transparent hover:border-[#3d5eff98] duration-500">
                <div className="relative overflow-hidden h-[200px] rounded-md w-full pulsate"></div>
                <div className="mt-3">
                  <div className="relative overflow-hidden h-[15px] rounded-sm w-[170px] pulsate"></div>
                  <div className="relative overflow-hidden h-[40px] rounded-sm w-full pulsate mt-1"></div>
                </div>
                <div className="flex mt-2">
                  <div className="relative overflow-hidden h-[15px] rounded-sm w-[120px] mr-1 pulsate mt-1"></div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full flex px-3 my-2 mt-3 items-center">
            <div className="w-1/12 h-[1px] rounded-sm bg-[#bbb] dark:bg-[#555]"></div>
            <h3 className="mx-2 text-[#555] capitalize dark:text-[#ddd] font-bold text-lg w-auto">
              Web Contributors
            </h3>
            <div className="w-8/12 h-[1px] rounded-sm bg-[#bbb] dark:bg-[#555]"></div>
          </div>
          <div className="w-full flex flex-wrap items-center justify-center">
            {webContributors ? (
              webContributors.map((data, key) => (
                <ContributorCard data={data} key={key} />
              ))
            ) : (
              <div className="p-5 gradient-shadow bg-white m-3 rounded-md transition cursor-pointer text-[#222] dark:bg-[#222222] dark:border-[#444] w-full lg:w-[20%] xl:w-[20%] md:w-[40%] border border-transparent hover:border-[#3d5eff98] duration-500">
                <div className="relative overflow-hidden h-[200px] rounded-md w-full pulsate"></div>
                <div className="mt-3">
                  <div className="relative overflow-hidden h-[15px] rounded-sm w-[170px] pulsate"></div>
                  <div className="relative overflow-hidden h-[40px] rounded-sm w-full pulsate mt-1"></div>
                </div>
                <div className="flex mt-2">
                  <div className="relative overflow-hidden h-[15px] rounded-sm w-[120px] mr-1 pulsate mt-1"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contributors;
