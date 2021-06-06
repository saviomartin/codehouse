import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css"; // tailwind jit
import { SignInPopup } from "../components";
import "../styles/App.css"; // custom styles
import { auth } from "../utils/firebase";

function MyApp({ Component, pageProps }) {
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
    }
  });

  return (
    <div className={`${darkMode ? "dark" : "light"} min-h-screen`}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} {...props} />
      <SignInPopup open={open} setOpen={setOpen} />
    </div>
  );
}

export default MyApp;
