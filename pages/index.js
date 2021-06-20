import React from "react";
import { App, Hero, NewsLetter, UpComingFeatures } from "../components";

const index = (props) => {
  return (
    <div className="h-full w-full">
      <Hero {...props} />
      <App {...props} showLoadingButton={true} />
      <NewsLetter {...props} />
    </div>
  );
};

export default index;
