import React from "react";
import { useRouter } from "next/router";

const reportPost = () => {
  const router = useRouter();

  const { id, website_url, cheatsheet_name } = router.query;

  return <div>{id}</div>;
};

export default reportPost;
