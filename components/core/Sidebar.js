import React, { useEffect, useState } from "react";

// material design sidebar
import Drawer from "@material-ui/core/Drawer";
import { Tab, Tabs } from "@material-ui/core";

// icon
import { FiChevronRight } from "react-icons/fi";

// fetching cheatSheets and category
import { harperFetch } from "../../utils/HarperFetch";

// link from next
import Link from "next/link";

const Sidebar = ({ showDrawer, toggleDrawer }) => {
  const [categories, setCategories] = useState([]);
  const [cheatSheets, setCheatSheets] = useState([]);

  // handles tab
  const [value, setValue] = useState("categories");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(async () => {
    // fetching category
    const categories = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.categories",
    });

    // fetching cheatSheets
    const cheatSheets = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.cheatsheets",
    });

    // data to be used
    await setCategories(categories && categories);
    await setCheatSheets(cheatSheets);
  }, []);

  return (
    <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
      <div className="w-[26vw] h-full flex items-center justify-between flex-col bg-[#ECF2F5] relative overflow-y-scroll">
        <div className="w-full h-full sticky top-0 left-0">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            className="bg-white border border-t-[#ccc] white-light-shadow"
          >
            <Tab label="Categories" value="categories" />
            <Tab label="Sources" value="sources" />
          </Tabs>
        </div>
        <div className="h-full w-full flex items-center flex-col py-3 mb-[20px]">
          <input
            type="text"
            className="w-[92.5%] border white-light-shadow border-[#4469FA] hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3 py-2"
            placeholder={`Search ${
              value.charAt(0).toUpperCase() + value.slice(1)
            }`}
          />
          <div className="w-full flex px-3 my-2 mt-3 items-center">
            <div className="w-1/12 h-[1px] rounded-sm bg-[#bbb]"></div>
            <h3 className="mx-1 text-[#555] capitalize">{value}</h3>
            <div className="w-full h-[1px] rounded-sm bg-[#bbb]"></div>
          </div>

          <div className="pb-5 w-full flex items-center flex-col">
            {value === "categories"
              ? categories.length > 1 &&
                categories.map((category) => (
                  <Link href={`/categories/${category.name}`}>
                    <a className="w-[92.5%] py-2 border border-[#ddd] duration-500 bg-white hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3 flex justify-between items-center category-hover my-1">
                      <h1 className="text-md text-[#222]">{category.name}</h1>
                      <FiChevronRight className="text-xl icon duration-300" />
                    </a>
                  </Link>
                ))
              : cheatSheets.length > 1 &&
                cheatSheets.map((cheatsheet) => {
                  const { website_url } = cheatsheet && cheatsheet;

                  // extracting url properties
                  const url = new URL(
                    website_url ? website_url : "https://hashnode.com"
                  );
                  return (
                    <Link href={`/categories/${url.hostname}`}>
                      <a className="w-[92.5%] py-2 border border-[#ddd] duration-500 bg-white hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3 flex justify-between items-center category-hover my-1">
                        <h1 className="text-md text-[#222]">
                          {url.hostname.replace(/^www\./, "")}
                        </h1>
                        <FiChevronRight className="text-xl icon duration-300" />
                      </a>
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
