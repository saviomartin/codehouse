import React from "react";
import { Button } from "@material-ui/core";
import { FiTwitter } from "react-icons/fi";

const TwitterBtn = () => {
  const twitterLink =
    "https://twitter.com/intent/tweet?text=Checkout%20codehouse.vercel.app%20by%20@SavioMartin7%0A%0AMore%20than%20300%20developer%20cheatsheets%20all%20in%20one%20place,%20with%20more%20amazing%20features.%20You%27ll%20love%20it!%F0%9F%94%A5%0A%0A%23DEVCommunity";

  return (
    <Button
      className="!p-0 !w-auto !h-auto !m-auto shine !ml-1"
      href={twitterLink}
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-[#1A91DA] hover:bg-[#0F84B4] px-3 py-2 capitalize rounded-md font-semibold flex items-center justify-center text-white">
        Share to Twitter
        <FiTwitter className="text-lg ml-1" />
      </div>
    </Button>
  );
};

export default TwitterBtn;
