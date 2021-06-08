import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";

const InfoBar = ({ currentPost }) => {
  const [meta, setMetadata] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id, cheatsheet_name, website_url, upvotes } =
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
    <div className="w-[65%] h-full min-h-[90vh] bg-white rounded-md white-light-shadow border border-[#ddd] p-5">
      {loading ? (
        "Loading"
      ) : (
        <>
          <img src={meta.og && image()} alt="" className="rounded-md w-10/12" />
          <h1 className="font-bold text-4xl mt-4">{cheatsheet_name}</h1>
          <p className="text-[#666] mt-1">
            {meta.meta && meta.meta.description
              ? meta.meta.description.slice(0, 150)
              : "Description not found"}
          </p>
          <div className="w-full bg-[#ddd] h-[1.25px] my-4 rounded-md"></div>
          <h1 className="font-semibold text-xl text-[#555]">Comments (4)</h1>
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
          <div className="rounded-md border border-[#ccc] p-2 flex items-center hover:bg-white duration-200 mt-2">
            <img
              src="https://avatars.githubusercontent.com/saviomartin"
              alt=""
              className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
            />
            <div className="ml-2">
              <h2 className="font-semibold text-lg text-[#222]">
                Wow! This looks cool. Great Cheatsheet
              </h2>
              <h4 className="text-xs font-semibold text-[#666]">3pm Today</h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoBar;
