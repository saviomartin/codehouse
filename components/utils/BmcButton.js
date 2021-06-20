import { Button } from "@material-ui/core";
import React from "react";

const BmcButton = () => {
  return (
    <Button className="!p-0 !w-auto !h-auto !m-auto shine !ml-1">
      <a href="https://www.buymeacoffee.com/saviomartin" target="_blank">
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          className="h-10"
        />
      </a>
    </Button>
  );
};

export default BmcButton;
