import React, { useEffect, useState, Fragment } from "react";

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

// for inifinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

// head
import Head from "next/head";
import axios from "axios";

const name = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6); // count of posts that should load first

  const router = useRouter();

  const { name } = router.query;

  // filters
  const [searchTerm, setSearchTerm] = useState(""); // search
  const [sort, setSort] = useState("popular"); // sort

  useEffect(async () => {
    setData([]);

    // fetching
    const allCheatsheets = await axios.get("/api/GET/cheatsheets");
    const cheatSheets = allCheatsheets.data;

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
  }, [sort]);

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
      <MainHeader {...props} />
      <Head>
        <title>
          {name && name.charAt(0).toUpperCase() + name.slice(1)} Cheatsheets -
          Code House
        </title>
      </Head>
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
          website_url={`https://codehouse.vercel.app/source/${name}`}
        />
        <InfiniteScroll
          dataLength={count} //This is important field to render the next data
          next={() => setCount(count + 5)}
          hasMore={count >= filteredPosts.length ? false : true}
        >
          <div className="flex justify-center mt-5 flex-wrap w-full max-w-[100vw] overflow-hidden">
            {filteredPosts
              .filter((cheatsheet) => {
                const url = new URL(cheatsheet.website_url);

                const cheatsheetName = url.hostname.toLowerCase();
                return cheatsheetName.includes(name && name.toLowerCase());
              })
              .slice(0, count)
              .map((cheatsheet, key) => (
                <Item
                  data={cheatsheet}
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
