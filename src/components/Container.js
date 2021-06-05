import React from "react";
import { AppHeader } from ".";
import { Card } from ".";
import dummdata from "../../dummydata.json";

const Container = () => {
  return (
    <div className="bg-[#ECF2F5] min-h-screen p-6">
      <AppHeader />
      <div className="flex justify-center mt-5 w-full flex-wrap">
        {dummdata.map((data, key) => (
          <Card data={data} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Container;
