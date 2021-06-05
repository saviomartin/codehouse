import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css"; // tailwind jit
import "../styles/App.css"; // custom styles

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const [listView, setListView] = useState(false);

  const props = { darkMode, setDarkMode, listView, setListView };

  return (
    <div className={`${darkMode ? "dark" : "light"} min-h-screen`}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} {...props} />
    </div>
  );
}

export default MyApp;
