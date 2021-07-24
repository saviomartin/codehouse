import React from 'react';

import axios from "axios";

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
            {toggleReplyBox && <>Replying</>}
            {!toggleReplyBox && <>Reply</>}
        </span>
    )
}

function ReplyBox() {
    return (
        <div className="reply-box">
        </div>
    )
}

export {Reply, Replies, ReplyButton, ReplyBox};
