import React from 'react';

import axios from "axios";
import { formatRelative } from "date-fns";
import {
    FiSend,
  } from "react-icons/fi";

function Reply({reply}) {
    return (
        <div>
            {reply}
        </div>
    )
}

function Replies({replies}) {
    console.log(replies);
    return (
        <div className="replies">
            {replies.map(({reply}, index) => (
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

function ReplyBox({id, toggleReplyBox, user, comments, comment, review, index}) {
    const [reply, setReply] = React.useState('');
    const sendReply = () => {
        const url = `/api/POST/${review ? `comment-review-cheatsheet` : `comment-cheatsheet`}`;
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
        }
    }
    return (
        <>
            {toggleReplyBox && <div className="reply-box">
                <div
                    className="flex items-center justify-between rounded-md border border-[#3d5eff] dark:bg-[#1F1F1F] m-2 p-1"
                    // data-aos="fade-left"
                >
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
