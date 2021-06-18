import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { MainHeader, Request } from "../components";
import Link from "next/link";
import { harperFetch } from "../utils/HarperFetch";

const FeatureRequests = ({ user }) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    // fetching
    const requests = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.requests",
    });

    // data to be used
    await setData(requests);
  }, []);
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
          <Link href="/new-feature">
            <a>
              <Button className="!p-0 !w-auto !h-auto !m-auto shine">
                <div className="bg-[#3d5eff] px-4 py-2 text-base capitalize rounded-md font-semibold flex items-center justify-center text-white hover-move-to-left">
                  New Request
                  <FiArrowRight className="text-lg ml-1 span duration-500" />
                </div>
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center flex-col mt-3">
        {data.map((item, key) => (
          <Request data={item} user={user} />
        ))}
      </div>
    </div>
  );
};

export default FeatureRequests;
