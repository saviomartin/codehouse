import { Button } from "@material-ui/core";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen bg-image w-full text-[#ECF2F5] flex items-center justify-center">
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
            <div className="bg-[#F5BA31] px-6 py-3 text-md capitalize rounded-md font-bold">
              Try Now!
            </div>
          </Button>
        </div>
      </div>
      <div className="w-5/12 h-full flex items-center justify-center flex-col"></div>
    </div>
  );
};

export default Hero;
