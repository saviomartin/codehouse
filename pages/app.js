import React, { Fragment } from "react";
import { App, MainHeader } from "../components";

const Container = (props) => {
  return (
    <Fragment>
      <MainHeader user={props.user} />
      <App {...props} />
    </Fragment>
  );
};

export default Container;
