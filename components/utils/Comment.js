import { formatRelative } from "date-fns";
import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="rounded-md border border-[#ccc] p-2 flex items-center hover:bg-white duration-200 mt-2">
      <div className="">
        <img
          src={
            comment.photoURL
              ? comment.photoURL
              : `https://unavatar.vercel.app/${comment.email}`
          }
          alt={comment.email}
          className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
        />
      </div>
      <div className="ml-2">
        <h2 className="font-semibold text-md text-[#222]">{comment.comment}</h2>
        <h4 className="text-xs font-semibold text-[#666] capitalize">
          {formatRelative(comment.time, new Date())} •{" "}
          {comment.name && comment.name}
        </h4>
      </div>
    </div>
  );
};

export default Comment;
