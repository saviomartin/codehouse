import React, { useEffect, useState } from "react";

// for inifinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

// components
import { AppHeader, Btn, Item } from "..";

// fetching or editing database
import { harperFetch } from "../../utils/HarperFetch";

const App = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6); // count of posts that should load first
  const [loading, setLoading] = useState(false);

  // filters
  const [searchTerm, setSearchTerm] = useState(""); // search
  const [sort, setSort] = useState("popular"); // sort

  useEffect(async () => {
    setData([]);
    setLoading(true);

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
    setLoading(false);
  }, [sort]);

  // destructuring props
  const { showLoadingButton = false, user, setOpen } = props;

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
      {showLoadingButton ? (
        <>
          <div className="flex justify-center mt-5 w-full flex-wrap">
            {filteredPosts
              .slice(0, searchTerm ? 25 : count)
              .map((cheetsheet, key) => (
                <Item
                  data={cheetsheet}
                  key={key}
                  {...props}
                  setOpen={setOpen}
                  searchTerm={searchTerm}
                  user={user}
                />
              ))}
          </div>
          {loading
            ? "Loading..."
            : !searchTerm && (
                <div className="w-full flex item-center justify-center mt-8">
                  <Btn>
                    <button
                      className="bg-app-gradient border border-[#391637] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline shine"
                      onClick={() => setCount(count + 20)}
                    >
                      Load More ...
                    </button>
                  </Btn>
                </div>
              )}
        </>
      ) : (
        <InfiniteScroll
          dataLength={count} //This is important field to render the next data
          next={() => setCount(count + 5)}
          hasMore={count >= data.lenghth ? false : true}
          loader={<h4>Loading...</h4>}
        >
          <div className="flex justify-center mt-5 w-full flex-wrap">
            {filteredPosts.slice(0, count).map((cheetsheet, key) => (
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
      )}
      {data.length > 1 && filteredPosts.length < 1 && (
        <div className="w-full flex items-center flex-col">
          <img src="/assets/svg/no-results.svg" className="h-[300px]" />
          <h1 className="font-bold text-3xl">No Results Found</h1>
        </div>
      )}
    </div>
  );
};

export default App;
