import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-app-gradient-2">
      <div className="w-full footer-pattern p-3 flex items-center justify-between border-t border-[#B84F90]">
        <h3 className="text-white font-normal">
          Another App from{" "}
          <a
            className="font-bold border-b-2 continuous-line hover:text-[#F5BA32] border-[#F5BA32]"
            href="http://twitter.com/saviomartin7"
            target="_blank"
            rel="noreferrer"
          >
            Savio Martin
          </a>{" "}
          and{" "}
          <Link href="/contributors">
            <a className="font-bold border-b-2 continuous-line hover:text-[#F5BA32] border-[#F5BA32]">
              Friends
            </a>
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Footer;
