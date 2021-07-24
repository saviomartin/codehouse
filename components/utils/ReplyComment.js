import React from 'react';

import axios from "axios";
import {
    FiSend,
  } from "react-icons/fi";

function Reply() {

    return (
        <div>
            
        </div>
    )
}

function Replies() {
    return (
        <div>

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

function ReplyBox({toggleReplyBox, setToggleReplyBox, comment}) {
    return (
        <>
            {toggleReplyBox && <div className="reply-box">
                <div
                    className="flex items-center justify-between rounded-md border border-[#3d5eff] dark:bg-[#2f2f2f] dark:border-[#555] m-2 p-1"
                >
                    <input
                        type="text"
                        placeholder={`Reply to ${comment.name}`}
                        className="h-full py-1 pl-1 w-full bg-transparent"
                    />        
                    <div
                        className="bg-[#3d5eff] p-3 pr-4 cursor-pointer shine rounded-lg"
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
