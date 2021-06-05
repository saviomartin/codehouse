import React, { useEffect, useState } from "react";
import { AppHeader } from ".";
import dummdata from "../dummydata.json";
import { Item } from ".";
import { harperFetch } from "../utils/HarperFetch";

const App = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(5);

  useEffect(async () => {
    const cheatSheets = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    });

    await setData(cheatSheets);
  }, []);

  return (
    <div className="bg-[#ECF2F5] min-h-screen p-6">
      <AppHeader {...props} />
      <div className="flex justify-center mt-5 w-full flex-wrap">
        {data.slice(0, count).map((cheetsheet, key) => (
          <Item data={cheetsheet} key={key} {...props} />
        ))}
      </div>
    </div>
  );
};

export default App;
