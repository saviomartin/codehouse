import React, { useEffect, useState } from "react";

// material ui
import { Button } from "@material-ui/core";

// icons
import { FiArrowRight } from "react-icons/fi";

// components
import { MainHeader, Request } from "../components";

import Link from "next/link"; // link
import Head from "next/head";

// utils
import { harperFetch } from "../utils/HarperFetch";
import axios from "axios";

const FeatureRequests = (props) => {
  const [data, setData] = useState([]);
  const { user } = props; // user

  useEffect(async () => {
    // fetching
    const requests = await axios.get("/api/GET/requests");

    // data to be used
    await setData(requests.data);
  }, [data]);

  return (
    <div className="bg-[#ECF2F5] dark:bg-[#2f2f2f] pb-12">
      <MainHeader {...props} />
      <Head>
        <title>Feature Requests - Code House</title>
      </Head>
      <div className="flex w-full items-center justify-center mt-3 mb-2 flex-col lg:flex-row">
        <img
          src="/assets/3d/feature-requests.png"
          className="h-[230px] lg:h-[300px]"
        />

        <div className="w-full lg:w-5/12 overflow-hidden text-center lg:text-left animate__animated animate__fadeInUp">
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
          <Request
            data={item}
            user={user}
            key={key}
            setOpen={props.setOpen}
            setData={setData}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureRequests;
