import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ContributorCard,
  GithubCard,
  SvgBanner,
  MainHeader,
} from "../components";
import { harperFetch } from "../utils/HarperFetch";

const contributors = ({ user }) => {
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
      <MainHeader user={user} />

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
          <div className="w-full flex flex-wrap">
            {githubContributors.map((contributor, key) => (
              <GithubCard contributor={contributor} key={key} />
            ))}
          </div>
          <div className="w-full flex px-3 my-2 mt-3 items-center">
            <div className="w-1/12 h-[1px] rounded-sm bg-[#bbb] dark:bg-[#555]"></div>
            <h3 className="mx-2 text-[#555] capitalize dark:text-[#ddd] font-bold text-lg w-auto">
              Web Contributors
            </h3>
            <div className="w-8/12 h-[1px] rounded-sm bg-[#bbb] dark:bg-[#555]"></div>
          </div>
          <div className="w-full flex-wrap">
            {webContributors.map((data, key) => (
              <ContributorCard data={data} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contributors;
