import React, { useState } from "react";
import { Btn } from "../components";

// harperFetch
import { harperFetch } from "../utils/HarperFetch";

// uuid
import { v4 as uuidv4 } from "uuid";

// toaster
import toast from "react-hot-toast";

// radio button
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const NewFeature = ({ user }) => {
  // default values
  const [values, setValues] = useState({
    title: "",
    description: "",
    type: "feature-request",
  });

  const { title, description, type } = values;

  // handleChange of inputs
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // logic
    if (title && description && type) {
      if (user.email) {
        let uuid = uuidv4().replace(/-/g, "");

        try {
          await harperFetch({
            operation: "insert",
            schema: "dev",
            table: "requests",
            records: [
              {
                id: uuid,
                title: title,
                description: description,
                type: type,
                status: "open",
                upvotes: [],
                addedby: {
                  photoURL: user.photoURL ? user.photoURL : "",
                  displayName: user.displayName
                    ? user.displayName
                    : "Anonymous",
                  email: user.email && user.email,
                },
              },
            ],
          });

          // toasting success
          toast.success("Successfully Created!");

          // making everything default
          setValues({
            title: "",
            description: "",
            type: "feature-request",
          });
        } catch (err) {
          console.log(err);
          toast.error("Something went wrong");
        }
      } else {
        toast.error("Please Sign In");
      }
    } else {
      toast.error("Please Fill All Fields");
    }
  };
  return (
    <div className="h-full min-h-screen text-[#ECF2F5] w-full bg-image p-3 flex items-center justify-center flex-col">
      <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold mb-1 lg:mb-3 xl:mb-3 text-center">
        New Request
      </h1>
      <div className="w-full lg:w-7/12 xl:w-7/12 h-full bg-white dark:bg-[#2f2f2f] rounded-xl m-1">
        <form
          className="bg-transparent rounded-xl h-full px-8 pt-6 pb-8 mb-4"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white"
              value={title}
              onChange={handleChange("title")}
              type="text"
              placeholder="title"
            />
          </div>
          <div className="-mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-[#fafafa]">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-[#1f1f1f] dark:border-[#555] dark:text-white"
              value={description}
              onChange={handleChange("description")}
              placeholder="description"
            />
          </div>
          <div className="mb-3">
            <RadioGroup value={type} onChange={handleChange("type")}>
              <div className="flex">
                <div className="flex items-center">
                  <FormControlLabel
                    value="feature-request"
                    control={<Radio />}
                  />
                  <h3 className="-ml-5 dark:text-white text-black font-medium">
                    Feature Request
                  </h3>
                </div>
                <div className="flex items-center ml-6">
                  <FormControlLabel value="bug-report" control={<Radio />} />
                  <h3 className="-ml-5 dark:text-white text-black font-medium">
                    Bug Report
                  </h3>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center justify-between">
            <Btn>
              <button
                className="bg-app-gradient border border-[#391637] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline shine"
                type="submit"
              >
                Add New Request
              </button>
            </Btn>
            <div className="flex items-center">
              <h3 className="text-green-400 font-medium">
                Adding As {""}
                {user.email ? (
                  <span className="font-bold">
                    {user.displayName ? user.displayName : user.email}
                  </span>
                ) : (
                  "Anonymous"
                )}
              </h3>
              <span className="flex h-3 w-3 relative ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewFeature;
