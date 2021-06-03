import React, { useState } from "react";

const create = () => {
  const [values, setValues] = useState({
    cheetsheet_name: "Awesome React CheetSheet",
    website_url: "https://hashnode.com/",
    category: "react",
    twitter_handle: "@SavioMartin7",
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
      category: "react",
      twitter_handle: "",
    });
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
    <div className="h-full min-h-screen text-[#ECF2F5] w-full bg-image p-3">
      <h1 className="text-4xl font-bold">Create New Cheetsheet</h1>
      <div className="w-7/12 h-full bg-white rounded-md m-1">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
          <div className="mb-4 pr-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <span className="shadow appearance-none border rounded w-full py-2 px-3 pr-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
              <input
                type="text"
                list="alist"
                name="category"
                value={category}
                onChange={handleChange("category")}
                className="w-full"
              />
              <datalist id="alist" className="w-full text-black">
                <option value="A Royal Affair" />
                <option value="A Sound of Thunder" />
                <option value="A Walk to Remember" />
                <option value="A Women, a Gun and a Noodle" />
                <option value="Artificial Intelligence" />
              </datalist>
            </span>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Twitter Handle (optional)
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
              className="bg-app-gradient hover:text-xl text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default create;
