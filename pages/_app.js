import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css"; // tailwind jit
import "../styles/App.css"; // custom styles

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const props = { darkMode, setDarkMode };

  return (
    <div className={`${darkMode && "dark"} min-h-screen`}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} {...props} />
    </div>
  );
}

export default MyApp;
