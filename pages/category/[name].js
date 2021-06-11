import React, { useEffect, useState } from "react";

// use router for params
import { useRouter } from "next/router";

// components
import { AppHeader, Banner, Item } from "../../components";

// fetching data
import { harperFetch } from "../../utils/HarperFetch";

// for inifinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

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
    const cheatSheets = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    });

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
    <div className="bg-[#ECF2F5] min-h-screen p-6">
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
        image_url="https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
      />
      <InfiniteScroll
        dataLength={count} //This is important field to render the next data
        next={() => setCount(count + 5)}
        hasMore={count >= filteredPosts.length ? false : true}
        loader={<h4>Loading...</h4>}
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
        <div className="w-full flex items-center flex-col">
          <img src="/assets/svg/no-results.svg" className="h-[300px]" />
          <h1 className="font-bold text-3xl">No Results Found</h1>
        </div>
      )}
    </div>
  );
};

export default name;
