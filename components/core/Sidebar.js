import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { FiChevronRight } from "react-icons/fi";
import { harperFetch } from "../../utils/HarperFetch";
import Link from "next/link";

const Sidebar = ({ showDrawer, toggleDrawer }) => {
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("categories");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(async () => {
    // fetching
    const categories = await harperFetch({
      operation: "sql",
      sql: "SELECT * FROM dev.categories",
    });

    // data to be used
    await setCategories(categories && categories);
  }, []);

  return (
    <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
      <div className="w-auto h-full flex items-center justify-between flex-col bg-[#ECF2F5] relative overflow-y-scroll">
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
        <div className="h-full w-full flex items-center flex-col py-3">
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
          {value === "categories" ? (
            categories.length > 1 &&
            categories.map((category) => (
              <Link href={`/categories/${category.name}`}>
                <a className="w-[92.5%] py-2 border border-[#ddd] duration-500 bg-white hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3 flex justify-between items-center category-hover my-1">
                  <h1 className="text-md text-[#222]">{category.name}</h1>
                  <FiChevronRight className="text-xl icon duration-300" />
                </a>
              </Link>
            ))
          ) : (
            <a className="w-[92.5%] py-2 border border-[#ddd] duration-500 bg-white hover:border-[#4469FA] focus:border-[#4469FA] rounded-md px-3 flex justify-between items-center category-hover">
              <h1 className="text-md text-[#222]">React</h1>
              <FiChevronRight className="text-xl icon duration-300" />
            </a>
          )}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
