import React from 'react';
import { formatRelative } from "date-fns";
import {
    FiSend,
  } from "react-icons/fi";

function Reply(props) {
    const {email, name, photoURL, reply, time} = props.reply;
    return (
        <div className="flex items-center duration-200 mt-2">
            <img
                src={
                    photoURL
                    ? photoURL
                    : `https://unavatar.vercel.app/${email}`
                }
                alt={email}
                className="h-[30px] w-[30px] rounded-md pixelated white-light-shadow"
            />
            <div className="ml-2">
                <h2 className="font-semibold text-xs text-[#222] dark:text-[#fafafa]">
                    {reply}
                </h2>
                <h4 className="text-xs font-semibold text-[#666] capitalize dark:text-[#aaa]">
                    {formatRelative(time, new Date())} •{" "}
                    {name && name}
                </h4>
            </div>
      </div>
    )
}

function Replies({toggleReplies, setToggleReplies, replies}) {
    return (
        <div className="rounded-md border border-[#ccc] dark:bg-[#2f2f2f] dark:border-[#555] hover:bg-white p-2 mt-2">
            <div className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-sm lg:text-base xl:text-lg text-[#555] dark:text-[#ccc]">
                    Replies ({replies && replies.length})
                </h1>
                <span className="text-xs text-[#3d5eff] font-semibold continuous-line cursor-pointer" onClick={() => setToggleReplies(!toggleReplies)}>
                    {!toggleReplies && <>Show</>}
                    {toggleReplies && <>Hide</>}
                </span>
            </div>
            {toggleReplies && replies.map((reply, index) => (
                <Reply key={`reply-${index}`} reply={reply} />   
            ))}
        </div>
    )
}

function ReplyButton({toggleReplyBox, setToggleReplyBox}) {
    return (
        <span className="text-xs text-[#3d5eff] font-semibold continuous-line cursor-pointer" onClick={() => setToggleReplyBox(!toggleReplyBox)}>
            {toggleReplyBox && <>Close Reply</>}
            {!toggleReplyBox && <>Reply</>}
        </span>
    )
}

function ReplyBox({id, toggleReplyBox, user, comments, comment, review, index, fetchAgain, setFetchAgain, setOpen}) {
    const [reply, setReply] = React.useState('');
    const sendReply = () => {
        const url = `/api/POST/${review ? `comment-review-cheatsheet` : `comment-cheatsheet`}`;
        if(user?.email){
            if(reply.trim()) {
                const temp = [...comments];
                temp[index].replies = comments[index].replies ? [...comments[index].replies] : [];
                temp[index].replies.unshift({
                    name: user.displayName ? user.displayName : "",
                    photoURL: user.photoURL ? user.photoURL : "",
                    reply: reply,
                    email: user.email,
                    time: new Date().getTime(),
                });
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                    id: id,
                    comments: [...temp],
                    }),
                });

                setFetchAgain(fetchAgain + 1);
                setReply('');
            } 
        } else setOpen(true);
    }
    return (
        <>
            {toggleReplyBox && <div className="reply-box">
                <div className="flex items-center justify-between rounded-md border border-[#3d5eff] dark:bg-[#1F1F1F] mt-2 p-1">
                    <input
                        type="text"
                        value={reply}
                        onChange={e => setReply(e.target.value)}
                        placeholder={`Reply to ${comment.name}`}
                        className="h-full py-1 pl-1 w-full bg-transparent"
                        onKeyDown={e => {if(e.keyCode === 13) {sendReply()}}}
                    />        
                    <div
                        className="bg-[#3d5eff] p-3 pr-4 cursor-pointer shine rounded-lg"
                        onClick={sendReply}
                    >
                    <FiSend
                        className="text-white"
                        style={{ transform: "rotate(45deg)" }}
                    />
                    </div>
                </div>    
            </div>}
        </>
    )
}

export {Reply, Replies, ReplyButton, ReplyBox};
