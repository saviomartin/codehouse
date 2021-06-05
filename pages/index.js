import React from "react";
import { App, Hero } from "../components";

const index = ({ darkMode, setDarkMode }) => {
  return (
    <div className="h-full w-full">
      <Hero />
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default index;
