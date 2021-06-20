import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-image h-auto w-full p-5 py-7">
      <div className="h-auto min-h-[80vh] w-full rounded-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-wrap border border-[#B84F90] flex-col">
        <h1 className="text-[#ECF2F5] text-4xl font-bold">
          Join Our NewsLetter
        </h1>
        <p className="text-sm text-[#aaa]">
          Never miss any new amazing cheatsheets, get them right onto your
          mails!
        </p>
        <div className="w-6/12 p-[1px] bg-app-gradient-2 mt-4 rounded-md">
          <div className="bg-[#0A0719] flex duration-500 focus:border-[#3d5eff] pl-3 rounded-lg p-1 w-full items-center justify-between">
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              className="h-full py-1 pl-1 w-full bg-transparent dark:text-white text-sm lg:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="bg-[#3d5eff] p-2 lg:p-3 ml-2 cursor-pointer shine rounded-lg text-sm lg:text-base">
              <FiSend
                className="text-white"
                style={{ transform: "rotate(45deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
