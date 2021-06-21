import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  );
};

export default Loader;
