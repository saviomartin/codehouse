import { useRouter } from "next/router";
import React from "react";
import { harperFetch } from "../../utils/HarperFetch";

const Cheatsheet = () => {
  const router = useRouter();

  const { id } = router.query;
  return <div>hi {id}</div>;
};

export default Cheatsheet;
