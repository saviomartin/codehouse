import React, {useState} from "react";
import {ReplyButton, Replies, ReplyBox} from "./ReplyComment";

// formating time
// we get time in milliseconds
// https://www.epochconverter.com/
import { formatRelative } from "date-fns";

const Comment = ({ id, user, comments, comment, review, index, fetchAgain, setFetchAgain, setOpen }) => {
  const [toggleReplyBox, setToggleReplyBox] = useState(false),
    [toggleReplies, setToggleReplies] = useState(true);

  return (
    <div
      className="rounded-md border border-[#ccc] dark:bg-[#2f2f2f] dark:border-[#555] hover:bg-white p-2 mt-2"
      data-aos="fade-left"
    >
      <div className="flex items-center duration-200">
        <img
          src={
            comment.photoURL
              ? comment.photoURL
              : `https://unavatar.vercel.app/${comment.email}`
          }
          alt={comment.email}
          className="h-[50px] w-[50px] rounded-md pixelated white-light-shadow"
        />
        <div className="ml-2">
          <h2 className="font-semibold text-base text-[#222] dark:text-[#fafafa]">
            {comment.comment}
          </h2>
          <h4 className="text-xs font-semibold text-[#666] capitalize dark:text-[#aaa]">
            {formatRelative(comment.time, new Date())} •{" "}
            {comment.name && comment.name}
            {user.email && <>{" • "}<ReplyButton toggleReplyBox={toggleReplyBox} setToggleReplyBox={setToggleReplyBox} /></>}
          </h4>
        </div>
      </div>
      {comment?.replies && <Replies toggleReplies={toggleReplies} setToggleReplies={setToggleReplies} replies={comment.replies} />}
      <ReplyBox id={id} toggleReplyBox={toggleReplyBox} user={user} comments={comments} comment={comment} review={review} index={index} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} setOpen={setOpen} />
    </div>
  );
};

export default Comment;
