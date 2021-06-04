import React from "react";
import { AppHeader } from ".";
import dummdata from "../dummydata.json";

const App = () => {
  return (
    <div className="bg-[#ECF2F5] min-h-screen p-6">
      <AppHeader />
      {JSON.stringify(dummdata)}
    </div>
  );
};

export default App;
