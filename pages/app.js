import React, { Fragment } from "react";
import { App, MainHeader } from "../components";

const Container = (props) => {
  return (
    <Fragment>
      <MainHeader {...props} />
      <App {...props} />
    </Fragment>
  );
};

export default Container;
