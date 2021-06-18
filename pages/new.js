import React, { useState } from "react";

// harperFetch
import { harperFetch } from "../utils/HarperFetch";

// uuid
import { v4 as uuidv4 } from "uuid";

// toaster
import toast from "react-hot-toast";

// Btn
import { Btn } from "../components";
import { FiCheck, FiX } from "react-icons/fi";

// material ui select
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const New = ({ user }) => {
  // default values
  const [values, setValues] = useState({
    cheatsheet_name: "",
    website_url: "",
    category: "react",
    twitter_handle: "",
  });

  // regex to test whether url is valid
  const is_url = (str) => {
    var pattern = new RegExp(
      "^" +
        "(?:(?:https?|ftp)://)" +
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:" +
        "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
        "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
        "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
        "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
        "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
        "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
        "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
        "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
        "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
        ")" +
        "(?::\\d{2,5})?" +
        "(?:/\\S*)?" +
        "$",
      "i"
    );
    return pattern.test(str);
  };

  // destructuring values
  const { cheatsheet_name, website_url, category, twitter_handle } = values;

  // handleChange of inputs
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // submit event
  const onSubmit = async (e) => {
    e.preventDefault();

    // logic
    if (cheatsheet_name && website_url && category) {
      let uuid = uuidv4().replace(/-/g, "");
      try {
        await harperFetch({
          operation: "insert",
          schema: "dev",
          table: "review",
          records: [
            {
              id: uuid,
              cheatsheet_name: cheatsheet_name,
              website_url: website_url,
              category: category,
              twitter_handle: twitter_handle,
              upvotes: [],
              comments: [],
              addedby: {
                photoURL: user.photoURL ? user.photoURL : "",
                displayName: user.displayName ? user.displayName : "Anonymous",
                email: user.email && user.email,
              },
            },
          ],
        });

        // toasting success
        toast.success("Successfully Created!");

        // making everything default
        setValues({
          cheatsheet_name: "",
          website_url: "",
          category: "react",
          twitter_handle: "",
        });
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
    } else {
      toast.error("Please Fill All Fields");
    }
  };

  const categories = [
    "vim",
    "mySql",
    "sass",
    "react",
    "css",
    "javascript",
    "npm",
    "vue",
    "go",
    "python",
    "flutter",
    "lodash",
    "react-native",
    "bash",
    "html",
    "c",
    "c#",
    "php",
    "angular",
    "jquery",
    "git",
    "markdown",
    "emmet",
    "VS Code",
    "yarn",
    "swift",
    "regex",
    "next",
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
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Cheatsheet Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white"
              value={cheatsheet_name}
              onChange={handleChange("cheatsheet_name")}
              type="text"
              placeholder="Awesome React Cheatsheet"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Website URL
            </label>
            <div
              className={`flex border-[1.75px] mb-3 rounded-md items-center ${
                is_url(website_url) ? "border-green-500" : "border-red-500"
              }`}
            >
              <input
                className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:text-white"
                value={website_url}
                onChange={handleChange("website_url")}
                placeholder="https://hashnode.com/"
              />
              {is_url(website_url) ? (
                <FiCheck className="text-green-500 text-2xl mr-2" />
              ) : (
                <FiX className="text-red-500 text-xl mr-2" />
              )}
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Category
            </label>
            <Select
              value={category}
              onChange={handleChange("category")}
              className="shadow appearance-none border rounded w-full pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white flex justify-center pl-3"
            >
              {categories.map((category, key) => (
                <MenuItem value={category} key={key}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Your Twitter Handle (optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white"
              value={twitter_handle}
              onChange={handleChange("twitter_handle")}
              placeholder="SavioMartin7"
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

export default New;
