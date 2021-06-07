import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css"; // tailwind jit
import { SignInPopup } from "../components";
import "../styles/App.css"; // custom styles
import { auth } from "../utils/firebase";
import Router from "next/router";
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [listView, setListView] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  const props = {
    darkMode,
    setDarkMode,
    listView,
    setListView,
    open,
    setOpen,
    user,
    setUser,
  };

  auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      console.log(user);
    }
  });

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
    NProgress.start();
    console.log("start");
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
    NProgress.done();
    console.log("complete");
  });

  return (
    <div className={`${darkMode ? "dark" : "light"} min-h-screen`}>
      <Toaster position="bottom-right" reverseOrder={false} />
      {loading && "Loading......"}
      <Component {...pageProps} {...props} />
      <SignInPopup open={open} setOpen={setOpen} />
    </div>
  );
}

export default MyApp;
