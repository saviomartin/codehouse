import { Button } from "@material-ui/core";
import React from "react";
import { BsLightning } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import Header from "./Header";

const Hero = () => {
  return (
    <div className="h-screen bg-image w-full text-[#ECF2F5] overflow-visible">
      <Header />
      <div className="flex items-center justify-center bg-image h-[90vh] w-full">
        <div className="w-7/12 h-full flex items-start justify-center flex-col pl-10">
          <h3 className="text-lg bg-text-gradient font-bold mb-3 uppercase tracking-wider">
            100+ CheetSheets. Sorting. Open Source. Categories.
          </h3>
          <h1 className="font-bold text-[3.5rem] leading-[3.75rem]">
            Worl'd biggest storehouse of developer cheetsheets
          </h1>
          <p className="text-light text-[#aaa] my-2 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            laudantium placeat. Obcaecati rem sequi, modi magnam eaque, nulla
            dolorem, possimus dolores ratione sit delectus?
          </p>
          <div className="flex mt-2">
            <Button className="!p-0 !w-auto !h-auto !m-auto shine">
              <div className="bg-[#F5BA31] px-5 py-[10px] text-lg capitalize rounded-md font-semibold flex items-center justify-center">
                Try Now!
                <BsLightning className="text-lg ml-1 -mt-1" />
              </div>
            </Button>
            <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-1">
              <div className="border-2 border-[#555] text-[#ffcf5e] px-5 py-[8px] text-lg capitalize rounded-md font-semibold flex items-center justify-center">
                Stars <span className="poppins ml-1">67</span>
                <FiGithub className="text-lg ml-1" />
              </div>
            </Button>
          </div>
        </div>
        <div className="w-5/12 h-full flex items-center justify-center flex-col"></div>
      </div>
    </div>
  );
};

export default Hero;
