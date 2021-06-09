import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiAirplay, FiSend, FiTriangle } from "react-icons/fi";
// for formatting date
import { formatRelative } from "date-fns";
import { Comment } from "../index";
import { Button } from "@material-ui/core";

const InfoBar = ({ currentPost }) => {
  const [meta, setMetadata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id, cheatsheet_name, website_url, upvotes, comments } =
    currentPost.length > 0 && currentPost[0];

  useEffect(() => {
    // normal state
    setMetadata([]);

    // fetching state
    axios
      .get(
        `https://meta-scrapper-api.herokuapp.com/api?url=${
          website_url && website_url
        }`
      )
      .then(async (response) => {
        setMetadata(response.data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [website_url]);

  const url = new URL("https://google.com");

  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg";
    }
  };

  return (
    <div className="w-[65%] h-full min-h-[90vh] bg-white rounded-md white-light-shadow border border-[#ddd] p-7">
      {loading ? (
        "Loading"
      ) : (
        <>
          <img
            src={meta.og && image()}
            alt=""
            className="rounded-md w-full mb-4"
          />
          <a
            className="text-blue-500 text-lg"
            href={url.protocol && url.hostname && url.protocol + url.hostname}
            target="_blank"
          >
            {url.hostname && url.hostname}
          </a>
          <br />
          <a
            className="font-bold text-3xl continuous-line hover:text-[#3d5eff]"
            href={website_url}
          >
            {cheatsheet_name}
          </a>
          <p className="text-[#666] mt-1">
            {meta.meta && meta.meta.description
              ? meta.meta.description.slice(0, 150)
              : "Description not found"}
          </p>
          <div className="flex mt-4 h-full items-start">
            <Button className="!p-0 !w-auto !h-auto !m-0 shine">
              <div className="bg-[#3d5eff] px-5 py-[8px] text-lg capitalize rounded-md font-semibold flex items-center justify-center text-white">
                {upvotes.length} Upvotes
                <FiTriangle className="text-lg ml-1 -mt-1" />
              </div>
            </Button>
            <Button className="!p-0 !w-auto !h-auto !m-0 !ml-1">
              <div className="border border-[#3d5eff] text-[#3d5eff] hover:bg-[#3d5eff] duration-500 hover:text-white px-5 py-[8px] text-lg capitalize rounded-md font-semibold flex items-center justify-center">
                Visit Website
                <FiAirplay className="text-lg ml-1" />
              </div>
            </Button>
          </div>
          <div className="w-full bg-[#ddd] h-[1.25px] my-4 rounded-md"></div>
          <h1 className="font-semibold text-xl text-[#555]">
            Comments ({comments && comments.length})
          </h1>
          <div className="flex border border-[#3d5eff] hover:border-[#445ac5] duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between mt-2">
            <input
              type="text"
              placeholder="Add Your Comment"
              className="h-full py-1 pl-1 w-full"
            />
            <div className="bg-[#3d5eff] p-3 pr-4 cursor-pointer shine rounded-lg">
              <FiSend
                className="text-white"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </div>
          {comments &&
            comments.map((comment, key) => (
              <Comment key={key} comment={comment} />
            ))}
        </>
      )}
    </div>
  );
};

export default InfoBar;
