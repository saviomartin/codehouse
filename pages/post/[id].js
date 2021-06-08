import { Button, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { RightBar, InfoBar } from "../../components";
import { harperFetch } from "../../utils/HarperFetch";

const Cheatsheet = () => {
  const router = useRouter();

  const [data, setData] = useState([]);
  const { id } = router.query;

  const filterPosts = (data, id) => {
    if (!id) {
      return data;
    }

    return data.filter((cheatsheet) => {
      const cheatId = cheatsheet.id;
      return cheatId.includes(id);
    });
  };

  useEffect(async () => {
    const cheatSheets = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    });

    setData(cheatSheets);
  }, []);

  // gets the currentPost
  const currentPost = filterPosts(data, id);

  return (
    <div className="bg-image h-full min-h-screen p-6 flex items-center justify-start relative">
      <InfoBar currentPost={currentPost} />
      <RightBar currentPost={currentPost} />
    </div>
  );
};

export default Cheatsheet;
