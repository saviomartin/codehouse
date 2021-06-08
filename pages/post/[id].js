import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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
    <div className="bg-image h-screen text-white">
      hi {JSON.stringify(currentPost)}
    </div>
  );
};

export default Cheatsheet;
