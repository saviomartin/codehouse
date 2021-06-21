import React, { useEffect, useState } from "react";

// formating time
import { formatRelative } from "date-fns";

// components
import { Btn } from "..";

// icons
import { FiTriangle } from "react-icons/fi";
import { BiGitRepoForked } from "react-icons/bi";
import { harperFetch } from "../../utils/HarperFetch";

const Request = ({ data, user, setOpen, setData }) => {
  const [isUpvoted, setIsUpvoted] = useState(false); // check is upvoted

  const { id, title, description, upvotes, addedby } = data; // from data

  // use effect for handling is upvoted or not
  useEffect(() => {
    if (data.upvotes) {
      if (user.email) {
        setIsUpvoted(upvotes.includes(user.email));
      }
    }
  });

  // upvote a request
  const upvoteRequest = () => {
    if (user.email) {
      if (isUpvoted) {
        // removing upvote if already upvoted
        const index = upvotes.indexOf(user.email);
        upvotes.splice(index, 1);

        harperFetch({
          operation: "update",
          schema: "dev",
          table: "requests",
          records: [
            {
              id: id,
              upvotes: upvotes,
            },
          ],
        });

        setData([]);
      } else {
        // adding upvote
        harperFetch({
          operation: "update",
          schema: "dev",
          table: "requests",
          records: [
            {
              id: id,
              upvotes: [...upvotes, user.email],
            },
          ],
        });

        setData([]);
      }
    } else {
      // showing sign in popup is user not found
      setOpen(true);
    }
  };

  return (
    <div className="cursor-pointer flex flex-col items-center p-3 rounded-md duration-500 white-light-shadow bg-white m-2 w-11/12 lg:w-8/12 border border-[#ddd] hover:border-[#3d5eff98] item-hover-text parent-for-image-scale dark:border-[#555] dark:bg-[#1F1F1F] dark:text-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex">
          <img
            src={
              addedby.photoURL
                ? addedby.photoURL
                : "https://unavatar.vercel.app/undefined"
            }
            alt=""
            className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
          />
          <div className="ml-3">
            <h1 className="text-lg font-bold text-[#222] dark:text-[#fafafa]">
              {addedby.displayName}
            </h1>
            <h4 className="text-xs font-semibold text-[#666] capitalize dark:text-[#aaa]">
              {formatRelative(data.__createdtime__, new Date())}
            </h4>
          </div>
        </div>
        <Btn>
          <div
            className={` ${
              isUpvoted
                ? "text-white bg-[#3d5eff] dark:border-[#222]"
                : "bg-white text-[#3d5eff] border-[#3d5eff] dark:text-white dark:border-[#555] dark:bg-[#1F1F1F]"
            } duration-500 px-4 py-2 h-full text-sm capitalize rounded-lg font-semibold border  flex items-center justify-center menu-animation-hover poppins`}
            onClick={upvoteRequest}
          >
            <FiTriangle className="text-sm span duration-500" />
            <span className="ml-1 text-base">{data.upvotes.length}</span>
          </div>
        </Btn>
      </div>
      <div className="w-full mt-3">
        <div className="flex mb-2">
          {data.status === "archived" ? (
            <div className="bg-red-500 py-1 px-3 w-auto flex items-center rounded-md text-sm font-medium text-white">
              <BiGitRepoForked className="mr-1" />
              Archived
            </div>
          ) : data.status === "progress" ? (
            <div className="bg-green-400 py-1 px-3 w-auto flex items-center rounded-md text-sm font-medium">
              <BiGitRepoForked className="mr-1" />
              In Progress
            </div>
          ) : data.status === "closed" ? (
            <div className="bg-blue-600 py-1 px-3 w-auto flex items-center rounded-md text-sm font-medium text-white">
              <BiGitRepoForked className="mr-1" />
              Closed
            </div>
          ) : (
            ""
          )}
        </div>
        <h1 className="text-xl font-bold text-[#222] dark:text-[#fafafa]">
          {title}
        </h1>
        <h4 className="text-sm text-[#666] dark:text-[#aaa]">{description}</h4>
      </div>
    </div>
  );
};

export default Request;
