import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Btn } from "..";
import {
  FiBookmark,
  FiExternalLink,
  FiMessageCircle,
  FiTriangle,
} from "react-icons/fi";
import axios from "axios";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import { harperFetch } from "../../utils/HarperFetch";

const Item = ({ data, listView, user, setOpen, searchTerm }) => {
  const [meta, setMetadata] = useState([]);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [changed, setChanged] = useState();

  const { id, cheatsheet_name, website_url, upvotes } = data;

  useEffect(() => {
    setMetadata([]);
    axios
      .get(`https://meta-scrapper-api.herokuapp.com/api?url=${website_url}`)
      .then(async (response) => {
        if (response.request.status === 400) {
          setLoading(false);
          await setError(true);
        } else {
          setLoading(false);
          await setMetadata(response.data);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [searchTerm]);

  const url = new URL(website_url);

  const goToCheetSheetPage = () => {
    router.push(`/post/${id}`);
  };

  const image = () => {
    if (meta.og.images.length) {
      return meta.og.images[0].url;
    } else if (meta.og.image) {
      return meta.og.image;
    } else {
      return "/assets/image-not-found.jpg";
    }
  };

  useEffect(() => {
    if (upvotes) {
      if (user.email) {
        setIsUpvoted(upvotes.includes(user.email));
      }
    }
  });

  const upvoteCheatSheet = () => {
    if (user.email) {
      if (isUpvoted) {
        const index = upvotes.indexOf(user.email);
        upvotes.splice(index, 1);

        harperFetch({
          operation: "update",
          schema: "dev",
          table: "cheatsheets",
          records: [
            {
              id: id,
              upvotes: upvotes,
            },
          ],
        });
        setChanged("sub");
      } else {
        harperFetch({
          operation: "update",
          schema: "dev",
          table: "cheatsheets",
          records: [
            {
              id: id,
              upvotes: [...upvotes, user.email],
            },
          ],
        });
        setChanged("add");
      }
    } else {
      setOpen(true);
    }
  };

  return url && !error && meta.meta && listView ? (
    <div
      className="cursor-pointer flex items-center p-3 rounded-md duration-500 white-light-shadow bg-white m-2 w-10/12 min-w-10/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale"
      onClick={goToCheetSheetPage}
    >
      {loading ? (
        <div className="flex w-full h-full items-center">
          <div className="h-[150px] w-[400px]">
            <Skeleton variant="rect" width="full" height={150} />
          </div>
          <div className="h-[150px] w-full ml-2 py-2">
            <div className="-mb-2">
              <Skeleton variant="rect" width="full" height={10} />
            </div>
            <Skeleton variant="rect" width="full" height={30} />
            <Skeleton variant="rect" width="full" height={10} />
            <div className="mt-3 flex">
              <div className="block">
                <Skeleton variant="rect" width={125} height={40} />
              </div>
              <div className="ml-1">
                <Skeleton variant="rect" width={125} height={40} />
              </div>
              <div className="ml-1">
                <Skeleton variant="rect" width={125} height={40} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="w-[250px] relative h-full overflow-hidden flex items-center justify-center rounded-md">
            <Link href={`/post/${id}`}>
              <a>
                <img
                  src={meta.og && image()}
                  alt=""
                  width="270"
                  className="rounded-md w-full h-[150px] scale-on-hover duration-500"
                />
              </a>
            </Link>
            <Btn className="rounded-md ml-1 absolute top-1 right-1">
              <div className="bg-[#ffffff] p-2 text-[#F5BA31] duration-500 text-md capitalize rounded-md font-semibold flex items-center justify-center menu-animation-hover poppins">
                <FiBookmark className="text-md span duration-500" />
              </div>
            </Btn>
          </div>
          <div className="w-9/12 h-full px-3 pl-5 py-5 flex items-start justify-between flex-col">
            <div className="block">
              <a
                className="text-blue-500 text-sm"
                href={
                  url.protocol && url.hostname && url.protocol + url.hostname
                }
                target="_blank"
              >
                {url.hostname && url.hostname}
              </a>
              <a href={website_url} target="_blank">
                <h1 className="font-bold text-xl duration-500 hover:text-[#3d5eff]">
                  {cheatsheet_name}
                </h1>
                <p className="text-[12px] text-[#666] mt-1">
                  {meta.meta && meta.meta.description
                    ? meta.meta.description.slice(0, 150)
                    : "Description not found"}
                </p>
              </a>
            </div>
            {upvotes && (
              <div className="flex items-center justify-start mt-1 w-full">
                <Btn className="rounded-md">
                  <div
                    className={`shine ${
                      isUpvoted
                        ? "bg-[#3d5eff] text-white"
                        : "border border-[#3d5eff] text-[#3d5eff]"
                    } ${
                      changed === "add"
                        ? "bg-[#3d5eff] !text-white"
                        : "text-white"
                    } duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins`}
                    onClick={upvoteCheatSheet}
                  >
                    {changed === "add"
                      ? upvotes.length + 1
                      : changed === "sub"
                      ? upvotes.length - 0
                      : upvotes.length}
                    <FiTriangle className="text-sm ml-1 span duration-500" />
                  </div>
                </Btn>
                <Link href={`/post/${id}`}>
                  <a>
                    <Btn className="rounded-md ml-1">
                      <div className="border border-[#3d5eff] text-[#3d5eff] duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
                        {data.comments.length}
                        <FiMessageCircle className="text-sm ml-1 span duration-500" />
                      </div>
                    </Btn>
                  </a>
                </Link>
                <a href={website_url} target="_blank" className="ml-1">
                  <Btn>
                    <div className="text-[#3d5eff] duration-500 px-2 py-3 h-full text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
                      <FiExternalLink className="text-sm span duration-500" />
                    </div>
                  </Btn>
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  ) : (
    <div
      className="cursor-pointer flex justify-between flex-col p-5 rounded-md duration-500 white-light-shadow bg-white m-2 w-3/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale"
      onClick={goToCheetSheetPage}
    >
      {loading ? (
        <div className="flex items-center flex-col">
          <div className="h-[157.5px] w-[300px]">
            <Skeleton variant="rect" width="full" height={150} />
          </div>
          <div className="w-[300px]">
            <div className="-mb-2">
              <Skeleton variant="rect" width="full" height={10} />
            </div>
            <Skeleton variant="rect" width="full" height={30} />
            <Skeleton variant="rect" width="full" height={10} />
            <div className="mt-3 flex">
              <div className="block">
                <Skeleton variant="rect" width={85} height={40} />
              </div>
              <div className="ml-1">
                <Skeleton variant="rect" width={85} height={40} />
              </div>
              <div className="ml-1">
                <Skeleton variant="rect" width={85} height={40} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="block">
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
                href={
                  url.protocol && url.hostname && url.protocol + url.hostname
                }
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
          {upvotes && (
            <div className="flex items-center justify-start mt-1 w-full">
              <Btn className="rounded-md">
                <div
                  className={`shine ${
                    isUpvoted
                      ? "bg-[#3d5eff] text-white"
                      : "border border-[#3d5eff] text-[#3d5eff]"
                  } ${
                    changed === "add"
                      ? "bg-[#3d5eff] !text-white"
                      : "text-white"
                  } duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins`}
                  onClick={upvoteCheatSheet}
                >
                  {changed === "add"
                    ? upvotes.length + 1
                    : changed === "sub"
                    ? upvotes.length - 0
                    : upvotes.length}
                  <FiTriangle className="text-sm ml-1 span duration-500" />
                </div>
              </Btn>
              <Link href={`/post/${id}`}>
                <a>
                  <Btn className="rounded-md ml-1">
                    <div className="border border-[#3d5eff] text-[#3d5eff] duration-500 px-4 py-2 text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
                      {data.comments.length}
                      <FiMessageCircle className="text-sm ml-1 span duration-500" />
                    </div>
                  </Btn>
                </a>
              </Link>
              <a href={website_url} target="_blank" className="ml-1">
                <Btn>
                  <div className="text-[#3d5eff] duration-500 px-2 py-3 h-full text-sm capitalize rounded-lg font-semibold flex items-center justify-center menu-animation-hover poppins">
                    <FiExternalLink className="text-sm span duration-500" />
                  </div>
                </Btn>
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Item;
