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
        content="codechef, codepen, code geass, codecademy, codeforces, codeblocks, codeigniter, codecanyon, code blocks, code m, code with harry, code compare, code of conduct, code 8, code chef, code alignment in visual studio, cheatsheet mac, cheatsheet font awesome, cheatsheet meaning, cheatsheet of html, cheat sheet bkp, cheatsheet font awesome 4.7, cheatsheet of java, cheatsheet of python, cheatsheet app, cheat sheet aws, cheat sheet android, cheatsheet app for windows, cheatsheet app ios, cheatsheet app review, cheatsheet angular, cheat sheet apple, a cheat sheet, a cheat sheet for math, a cheat sheet meaning, a cheat sheet on residential schools in canada, a cheat sheet to indian restaurant menus, make cheat sheet, how to create cheat sheet, a good cheat sheet, cheatsheet bootstrap, cheatsheet bootstrap 5, cheat sheet bgp, cheat sheet bash, cheat sheet big o, cheat sheet boi, cheat sheet blackjack, ctrl+b cheat sheet, cheat sheet css, cheat sheet creator, cheatsheet c++, cheat sheet conda, cheatsheet clojure,cheat sheet cisco,c cheat sheet,c cheat sheet pdf,c cheat sheet github,c cheat sheet pdf download,c programming cheat sheet,c sharp cheat sheet,objective c cheat sheet,c pointer cheat sheet,cheat sheet docker, sheet design, code house, codehouse, code houses, coding house, code house hashnode, code house savio, house code, coding savio, savio martin, code hashnode, hashnode codehouse, codehouse harperdb, harper db, code house, coding houses, code house by savio martin, code house by savio"
      />
      <link rel="canonical" href="https://codehouse.now.sh/" />
      <link rel="apple-touch-icon" href="/icons/logo192.png" />
      <link rel="icon" href="/favicon.ico" />

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
