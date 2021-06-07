import React, { useEffect, useState } from "react";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { Btn } from "..";
import axios from "axios";

const BookMarkItem = ({ data }) => {
  const [meta, setMetadata] = useState([]);

  const { id, cheatsheet_name, website_url } = data;

  useEffect(() => {
    axios
      .get(`https://meta-scrapper-api.herokuapp.com/api?url=${website_url}`)
      .then(async (response) => {
        if (response.request.status === 400) {
        } else {
          await setMetadata(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg";
    }
  };

  const url = new URL(website_url);
  return (
    <div className="cursor-pointer flex justify-between flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale">
      <div className="w-full relative overflow-hidden h-[157.5px] rounded-md">
        <Link href={`/post/${id}`}>
          <a>
            <img
              src={meta.og && image()}
              alt=""
              width="300"
              className="rounded-md w-full mb-2 h-[157.5px] scale-on-hover duration-500"
            />
          </a>
        </Link>
        <Btn className="rounded-md ml-1 absolute top-1 right-1">
          <div className="bg-[#ffffff] p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins">
            <FiBookmark className="text-md span duration-500" />
          </div>
        </Btn>
      </div>
      <div className="block mt-2">
        <a
          className="text-blue-500 text-sm"
          href={url.protocol && url.hostname && url.protocol + url.hostname}
          target="_blank"
        >
          {url.hostname && url.hostname}
        </a>
        <a href={website_url} target="_blank">
          <h1 className="font-bold text-lg duration-500 hover:text-[#3d5eff]">
            {cheatsheet_name.length > 50
              ? cheatsheet_name.slice(0, 50) + "..."
              : cheatsheet_name}
          </h1>
          <p className="text-[12px] text-[#666] mt-1">
            {meta.meta && meta.meta.description
              ? meta.meta.description.slice(0, 150)
              : "description not found"}
          </p>
        </a>
      </div>
    </div>
  );
};

export default BookMarkItem;
