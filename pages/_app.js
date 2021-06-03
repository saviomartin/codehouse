import { Toaster } from "react-hot-toast";
import "tailwindcss/tailwind.css"; // tailwind jit
import "../styles/App.css"; // custom styles

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark min-h-screen">
      <Toaster position="bottom-right" reverseOrder={false} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
