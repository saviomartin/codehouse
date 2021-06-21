import { useEffect, useState } from "react";

// styles
import "tailwindcss/tailwind.css"; // tailwind jit
import "../styles/App.css"; // custom styles

// toaster
import { Toaster } from "react-hot-toast";

// components
import { Footer, LoaderHome, Sidebar, SignInPopup } from "../components";

// firebase auth
import { auth } from "../utils/firebase";

// Router from next
import Router from "next/router";

// showing progress using nprogress
import NProgress from "nprogress";

// animate
import "animate.css";

// aos
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  // views
  const [darkMode, setDarkMode] = useState(false);
  const [listView, setListView] = useState(false);

  // handling sign in popup
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState([]);

  // handling bookmarks
  const [bookmarks, setBookmarks] = useState([]);

  // drawer
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  // fetching bookmarks
  const fetchBookmarks = () => {
    if (window !== undefined) {
      if (window.localStorage.getItem("bookmarks")) {
        setBookmarks(JSON.parse(window.localStorage.getItem("bookmarks")));
      } else {
        // adding a blank [] if no bookmarks found
        window.localStorage.setItem("bookmarks", JSON.stringify([]));
      }
    }
  };

  // useeffect to handle bookmarks
  useEffect(() => {
    fetchBookmarks();
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem("darkMode")) {
      setDarkMode(JSON.parse(localStorage.getItem("darkMode")));
    } else {
      setDarkMode(false);
      window.localStorage.setItem("darkMode", false);
    }
    if (window.localStorage.getItem("listView")) {
      setListView(JSON.parse(localStorage.getItem("listView")));
    } else {
      setListView(false);
      window.localStorage.setItem("listView", false);
    }
  }, []);

  // destructured props
  const props = {
    darkMode,
    setDarkMode,
    listView,
    setListView,
    open,
    setOpen,
    user,
    setUser,
    bookmarks,
    fetchBookmarks,
    showDrawer,
    toggleDrawer,
  };

  // handling auth and storing user if found
  auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });

  // config nprogress
  NProgress.configure({ showSpinner: false });

  // showing loading and progress
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
    setShowDrawer(false);
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
    setShowDrawer(false);
  });

  useEffect(() => {
    // AOS
    Aos.init();
  });

  return (
    <div className={`${darkMode ? "dark" : "light"} min-h-screen`}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} {...props} />
      <SignInPopup open={open} setOpen={setOpen} darkMode={darkMode} />
      <Sidebar {...props} />
      <Footer />
    </div>
  );
}

export default MyApp;
