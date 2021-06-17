import React from "react";
import { Header, SvgBanner } from "../components";
import MainHeader from "../components/core/MainHeader";

const contributors = ({ darkMode, user }) => {
  return (
    <div className="bg-[#ECF2F5] dark:bg-[#2F2F2F] h-full w-full overflow-visible min-h-screen">
      <MainHeader user={user} />

      <SvgBanner
        text="Contributors"
        description="A big thanks to all contributors who helped code house grow and help many! Thank you! Keep helps us grow! 🙏"
        image_url="/assets/3d/contributors.png"
      />

      <div className="flex justify-center w-full">
        <div className="w-9/12 bg-green-300 p-3"></div>
      </div>
    </div>
  );
};

export default contributors;
