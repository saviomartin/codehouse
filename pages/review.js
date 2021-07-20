import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

// for inifinite scroll
import InfiniteScroll from "react-infinite-scroll-component";

// components
import {
  AppHeader,
  Item,
  Loader,
  MainHeader,
  NotFound,
  SvgBanner,
} from "../components";

// fetching or editing database

const Review = (props) => {
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
    const allCheatsheets = await axios.get("/api/GET/review");
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
    setLoading(false);
  }, [sort]);

  // destructuring props
  const { user, setOpen, darkMode } = props;

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
      <div className="bg-[#ECF2F5] dark:bg-[#2f2f2f] min-h-screen p-6 pb-10">
        <AppHeader
          {...props}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sort={sort}
          setSort={setSort}
        />
        <SvgBanner
          text="Cheatsheet on Review"
          description="These cheatsheets are on review, give them an upvote to faster the
          process. Validation generally takes less than 2 days 🤟"
          image_url="/assets/3d/review.png"
        />
        <InfiniteScroll
          dataLength={count} //This is important field to render the next data
          next={() => setCount(count + 5)}
          hasMore={count >= data.lenghth ? false : true}
          loader={<Loader />}
        >
          <div className="flex justify-center w-full flex-wrap">
            {filteredPosts.slice(0, count).map((cheatsheet, key) => (
              <Item
                data={cheatsheet}
                key={key}
                {...props}
                setOpen={setOpen}
                user={user}
                review={true}
              />
            ))}
          </div>
        </InfiniteScroll>
        {data.length > 1 && filteredPosts.length < 1 && (
          <NotFound text="No Results Found" darkMode />
        )}
        {data.length < 1 && (
          <NotFound text="No Cheatsheets on Review" darkMode />
        )}
      </div>
    </Fragment>
  );
};

export default Review;
