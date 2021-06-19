import React, { Fragment, useEffect, useState } from "react";

// use router for params
import { useRouter } from "next/router";

// components
import {
  AppHeader,
  Banner,
  Item,
  MainHeader,
  NotFound,
} from "../../components";

// fetching data
import { harperFetch } from "../../utils/HarperFetch";

// for inifinite scroll
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

// head
import Head from "next/head";

const name = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6); // count of posts that should load first

  // image from unsplash
  const [image, setImage] = useState("");

  const router = useRouter();

  const { name } = router.query;

  // client_id
  const client_id = process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID;

  // filters
  const [searchTerm, setSearchTerm] = useState(""); // search
  const [sort, setSort] = useState("popular"); // sort

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(async () => {
    setData([]);

    // fetching
    const cheatSheets = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    });

    const randomImage = Math.floor(Math.random() * 9) + 1;
    setImage(`/assets/images/${randomImage}.jpg`); // random image

    // sorting
    if (sort === "newest") {
      cheatSheets
        .sort((a, b) => {
          return a.__createdtime__ - b.__createdtime__;
        })
        .reverse();
    } else if (sort === "oldest") {
      cheatSheets.sort((a, b) => {
        return a.__createdtime__ - b.__createdtime__;
      });
    } else {
      cheatSheets.sort((a, b) => {
        if (a.upvotes.length > b.upvotes.length) {
          return -1;
        } else {
          return 1;
        }
      });
    }

    // data to be used
    await setData(cheatSheets);
  }, [sort, name]);

  // destructuring props
  const { user, setOpen } = props;

  // filtering posts (search)
  const filterPosts = (data, query) => {
    if (!query) {
      return data;
    }

    return data.filter((cheatsheet) => {
      const cheatsheetName = cheatsheet.cheatsheet_name.toLowerCase();
      return cheatsheetName.includes(query.toLowerCase());
    });
  };

  // all posts gets stored here
  const filteredPosts = filterPosts(data, searchTerm);

  return (
    <Fragment>
      <Head>
        <title>
          {name && name.charAt(0).toUpperCase() + name.slice(1)} Cheatsheets -
          Code House
        </title>
      </Head>
      <MainHeader {...props} />
      <div className="bg-[#ECF2F5] min-h-screen p-6 dark:bg-[#2F2F2F]">
        <AppHeader
          {...props}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sort={sort}
          setSort={setSort}
        />
        <Banner
          text={name}
          website_url={`https://codehouse.vercel.app/category/${name}`}
          image_url={image && image}
        />
        <InfiniteScroll
          dataLength={count} //This is important field to render the next data
          next={() => setCount(count + 5)}
          hasMore={count >= filteredPosts.length ? false : true}
        >
          <div className="flex justify-center mt-5 w-full flex-wrap">
            {filteredPosts
              .filter((cheatsheet) => {
                const cheatsheetName = cheatsheet.category.toLowerCase();
                return cheatsheetName.includes(name && name.toLowerCase());
              })
              .slice(0, count)
              .map((cheetsheet, key) => (
                <Item
                  data={cheetsheet}
                  key={key}
                  {...props}
                  setOpen={setOpen}
                  user={user}
                />
              ))}
          </div>
        </InfiniteScroll>

        {data.length > 1 && filteredPosts.length < 1 && (
          <NotFound text="No Results Found" darkMode={props.darkMode} />
        )}
      </div>
    </Fragment>
  );
};

export default name;
