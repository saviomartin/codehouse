import axios from "axios";
import React, { useEffect, useState } from "react";
import { GithubCard, Header, SvgBanner } from "../components";
import MainHeader from "../components/core/MainHeader";

const contributors = ({ darkMode, user }) => {
  const [data, setData] = useState([]);

  const fetchContributors = () => {
    axios
      .get(
        "https://api.github.com/repos/saviomartin/discord-clone/contributors",
        {
          headers: {},
        }
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
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
          <div className="w-full flex flex-wrap">
            {data.map((contributor, key) => (
              <GithubCard contributor={contributor} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default contributors;