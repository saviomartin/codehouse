import React, { useState } from "react";
import { useRouter } from "next/router";
// Btn
import { Btn } from "../components";

// material ui select
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const reportPost = ({ user }) => {
  const router = useRouter();

  const [values, setValues] = useState({
    id: router.query.id,
    website_url: router.query.website_url,
    type: "broken-link",
    description: "",
  });

  const { id, website_url, type, description } = values;

  // handleChange of inputs
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (e) => {
    console.log(values);
  };

  const types = [
    {
      type: "Broken Link",
      value: "broken-link",
    },
    {
      type: "Wrong Category",
      value: "wrong-category",
    },
    {
      type: "Outdated Information",
      value: "outdated-information",
    },
    {
      type: "Its Spam",
      value: "spam",
    },
    {
      type: "This should not be on codehouse",
      value: "should-not-be-on-codehouse",
    },
    {
      type: "Other",
      value: "other",
    },
  ];

  return (
    <div className="h-full min-h-screen text-[#ECF2F5] w-full bg-image p-3 flex items-center justify-center flex-col">
      <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-1 lg:mb-3 xl:mb-3 text-center">
        Create New Cheatsheet
      </h1>

      <div className="w-full lg:w-7/12 xl:w-7/12 h-full bg-white dark:bg-[#2f2f2f] rounded-xl m-1">
        <form
          className="bg-transparent rounded-xl h-full px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Reason
            </label>
            <Select
              value={type}
              onChange={handleChange("type")}
              className="shadow appearance-none border rounded w-full pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white flex justify-center pl-3 Epilogue-Imp"
            >
              {types.map((type, key) => (
                <MenuItem value={type.value} key={key}>
                  {type.type}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="-mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Tell Us More
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white"
              value={description}
              placeholder="description"
              onChange={handleChange("description")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Btn>
              <button
                className="bg-app-gradient border border-[#391637] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline shine"
                type="submit"
              >
                Add New Cheatsheet
              </button>
            </Btn>
            <div className="flex items-center">
              <h3 className="text-green-400 font-medium">
                Adding As{" "}
                {user.email ? (
                  <span className="font-bold">
                    {user.displayName ? user.displayName : user.email}
                  </span>
                ) : (
                  "Anonymous"
                )}
              </h3>
              <span class="flex h-3 w-3 relative ml-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reportPost;
