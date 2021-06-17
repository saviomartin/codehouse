import { Button } from "@material-ui/core";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { MainHeader } from "../components";

const FeatureRequests = ({ user }) => {
  return (
    <div className="bg-[#ECF2F5] dark:bg-[#2f2f2f]">
      <MainHeader user={user} />
      <div className="flex w-full items-center justify-center mt-3 mb-2 flex-col lg:flex-row">
        <img
          src="/assets/3d/feature-requests.png"
          className="h-[230px] lg:h-[300px]"
        />

        <div className="w-full lg:w-5/12 overflow-hidden text-center lg:text-left">
          <h1 className="text-2xl lg:text-4xl font-bold dark:text-[#fafafa]">
            Feature Requests
          </h1>
          <p className="text-xs lg:text-sm text-[#666] dark:text-[#ccc] mb-2 mt-1">
            Lets make the app better together. Have a feature in mind, go ahead
            and share add it! We're happy to implement it! ❤️
          </p>
          <Button className="!p-0 !w-auto !h-auto !m-auto shine">
            <div className="bg-[#3d5eff] px-4 py-2 text-base capitalize rounded-md font-semibold flex items-center justify-center text-white hover-move-to-left">
              New Request
              <FiArrowRight className="text-lg ml-1 span duration-500" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureRequests;
