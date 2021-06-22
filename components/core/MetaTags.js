// head
import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="theme-color" content="#d73e87" />

      <title>Code House - Store House of 300+ Developer Cheatsheets</title>
      <meta
        name="description"
        content="Code House is the all in one storehouse for developer cheatsheets.
            Code House is made up of 300+ curated cheatsheets from 230+ sources.
            Filter by categories, or source, sort by time or popularity, dark
            mode, bookmark cheatsheets, add new cheatsheets, request feature,
            and much more features, make the app amazing!"
      />
      <meta
        name="keywords"
        content="tweeter, tweets, twitter, twitter app, sharing to twitter, tweeterapp, tweeeterapp by savio, savio, savio martin, tweeter sharing, tweet, share to twitter, twitter intents, intent, twitter app, twitter intents generator, twitter intent generator, open source, tweet api, twitter api, react, next, tweeter github, tweeter saviomartin, tweeter sharing to twitter made easy"
      />
      <link rel="canonical" href="https://codehouse.now.sh/" />
      <link rel="apple-touch-icon" href="/assets/logo192.png" />
      <link rel="icon" href="/assets/favicon.ico" />

      {/* Primary Meta Tags */}
      <meta
        name="title"
        content="Code House - Store House of 300+ Developer Cheatsheets"
      />
      <meta
        name="description"
        content="Code House is the all in one storehouse for developer cheatsheets.
            Code House is made up of 300+ curated cheatsheets from 230+ sources.
            Filter by categories, or source, sort by time or popularity, dark
            mode, bookmark cheatsheets, add new cheatsheets, request feature,
            and much more features, make the app amazing!"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codehouse.now.sh/" />
      <meta
        property="og:title"
        content="Code House - Store House of 300+ Developer Cheatsheets"
      />
      <meta
        property="og:description"
        content="Code House is the all in one storehouse for developer cheatsheets.
            Code House is made up of 300+ curated cheatsheets from 230+ sources.
            Filter by categories, or source, sort by time or popularity, dark
            mode, bookmark cheatsheets, add new cheatsheets, request feature,
            and much more features, make the app amazing!"
      />
      <meta
        property="og:image"
        content="https://codehouse.vercel.app/assets/codehouse-banner.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://codehouse.now.sh/" />
      <meta
        property="twitter:title"
        content="Code House - Store House of 300+ Developer Cheatsheets"
      />
      <meta
        property="twitter:description"
        content="Code House is the all in one storehouse for developer cheatsheets.
            Code House is made up of 300+ curated cheatsheets from 230+ sources.
            Filter by categories, or source, sort by time or popularity, dark
            mode, bookmark cheatsheets, add new cheatsheets, request feature,
            and much more features, make the app amazing!"
      />
      <meta
        property="twitter:image"
        content="https://codehouse.vercel.app/assets/codehouse-banner.png"
      />

      {/* Buy Me A Coffee */}
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="saviomartin"
        data-description="Support me on Buy me a coffee!"
        data-message="If you're enjoying my app, consider supporting me with a coffee ☕️"
        data-color="#FFDD00"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </Head>
  );
};

export default MetaTags;
