import React, { useEffect, useState } from "react";

import axios from "axios"; //axios

//icons
import { FiGithub, FiLink, FiTwitter } from "react-icons/fi";

const GithubCard = ({ contributor }) => {
  const [data, setData] = useState([]);

  const fetchContributor = () => {
    axios
      .get(`https://api.github.com/users/${contributor.login}`, {
        headers: {},
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchContributor();
    console.log(contributor);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="p-5 gradient-shadow bg-white m-3 rounded-md transition duration-400 cursor-pointer text-[#222] dark:bg-[#222222] border dark:border-[#444] max-w-[19%]"
      data-aos="fade-left"
    >
      <img
        src={`${contributor.avatar_url}&s=200`}
        alt={contributor.login}
        className="max-h-[200px] rounded-md"
      />
      <h1 className="text-2xl font-bold Raleway mt-2 truncate capitalize dark:text-[#fafafa] -mb-2">
        {data.name ? data.name : contributor.login}
      </h1>
      <a
        className="text-xs overflow-ellipsis overflow-hidden h-[36px] Raleway text-blue-300"
        href={`https://github.com/${contributor.login}`}
        target="_blank"
        rel="noreferrer"
      >
        github.com/{contributor.login}
      </a>
      <div className="flex items-center pt-4">
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
        >
          <FiGithub />
        </a>
        {data.twitter_username && (
          <a
            href={`https://twitter.com/${data.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="ml-2 dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
          >
            <FiTwitter />
          </a>
        )}
        {data.blog && (
          <a
            href={data.blog}
            target="_blank"
            rel="noreferrer"
            className="ml-2 dark:text-[#fafafa] hover:text-[#999] dark:hover:text-[#ccc]"
          >
            <FiLink />
          </a>
        )}
      </div>
    </div>
  );
};

export default GithubCard;
