import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const create = () => {
  const [values, setValues] = useState({
    cheetsheet_name: "",
    website_url: "",
    category: "",
    twitter_handle: "",
  });

  const { cheetsheet_name, website_url, category, twitter_handle } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(values);
    setValues({
      cheetsheet_name: "",
      website_url: "",
      category: "",
      twitter_handle: "",
    });

    if (cheetsheet_name && website_url && category && twitter_handle) {
      // TODO: Add new Cheetsheet
      toast.success("Successfully toasted!");
    } else {
      toast.error("This didn't work.");
    }
  };

  const categories = [
    "react",
    "css",
    "javascript",
    "python",
    "flutter",
    "hooks",
    "dart",
    "react-native",
    "html",
    "css",
    "jquery",
    "git",
    "markdown",
  ];

  return (
    <div className="h-full min-h-screen text-[#ECF2F5] w-full bg-image p-3 flex items-center justify-center flex-col">
      <Toaster position="bottom-right" reverseOrder={false} />
      <h1 className="text-4xl font-bold mb-3">Create New Cheetsheet</h1>
      <div className="w-7/12 h-full bg-white rounded-xl m-1">
        <form
          className="bg-white rounded-xl h-full px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              CheetSheet Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cheetsheet_name}
              onChange={handleChange("cheetsheet_name")}
              type="text"
              placeholder="Awesome React CheetSheet"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Website URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={website_url}
              onChange={handleChange("website_url")}
              placeholder="https://hashnode.com/"
            />
          </div>
          <div className="mb-6 pr-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <span className="shadow appearance-none border rounded w-full py-2 px-3 pr-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
              <input
                type="text"
                list="alist"
                value={category}
                onChange={handleChange("category")}
                placeholder="react"
                className="w-full"
              />
              <datalist id="alist" className="w-full text-black">
                {categories.map((category, key) => (
                  <option value={category} key={key} className="capitalize" />
                ))}
              </datalist>
            </span>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Twitter Handle (optional)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={twitter_handle}
              onChange={handleChange("twitter_handle")}
              placeholder="@SavioMartin7"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-app-gradient border border-[#391637] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add New CheetSheet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default create;
