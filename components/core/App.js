import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { AppHeader, Btn } from "..";
import { Item } from "..";
import { harperFetch } from "../../utils/HarperFetch";
// for formatting date
import { format } from "date-fns";

const App = (props) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("popular");

  useEffect(async () => {
    setData([]);
    const cheatSheets = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    });
    if (sort === "newest") {
      cheatSheets
        .sort((a, b) => {
          return format(new Date(a.__createdtime__), "k:m:s").localeCompare(
            format(new Date(b.__createdtime__), "k:m:s")
          );
        })
        .reverse();
    } else if (sort === "oldest") {
      cheatSheets.sort((a, b) => {
        return format(new Date(a.__createdtime__), "k:m:s").localeCompare(
          format(new Date(b.__createdtime__), "k:m:s")
        );
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
    await setData(cheatSheets);
  }, [sort]);

  const { showLoadingButton = false } = props;

  const filterPosts = (data, query) => {
    if (!query) {
      return data;
    }

    return data.filter((cheatsheet) => {
      const cheatsheetName = cheatsheet.cheatsheet_name.toLowerCase();
      return cheatsheetName.includes(query.toLowerCase());
    });
  };

  const filteredPosts = filterPosts(data, searchTerm);

  return (
    <div className="bg-[#ECF2F5] min-h-screen p-6">
      <AppHeader
        {...props}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSort={setSort}
      />
      {showLoadingButton ? (
        <>
          <div className="flex justify-center mt-5 w-full flex-wrap">
            {filteredPosts.slice(0, count).map((cheetsheet, key) => (
              <Item data={cheetsheet} key={key} {...props} />
            ))}
          </div>
          {!searchTerm && (
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
              <Item data={cheetsheet} key={key} {...props} />
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
