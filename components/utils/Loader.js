import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </div>
  );
};

export default Loader;
