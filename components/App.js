import React from "react";
import { AppHeader } from ".";
import dummdata from "../dummydata.json";
import { Item } from ".";

const App = ({ darkMode, setDarkMode }) => {
  return (
    <div className="bg-[#ECF2F5] min-h-screen p-6">
      <AppHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex justify-center mt-5 w-full flex-wrap">
        {dummdata.map((data, key) => (
          <Item data={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default App;
