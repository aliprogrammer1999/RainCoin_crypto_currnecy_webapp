import React from "react";
import { ThemeBtn } from "../Button";
import Logo from "./logo";
import MobileNav from "./navbar/MobileNav";
import MobileSearch from "./search/MobileSearch";

const MobileHeader = () => {
  return (
    <div className="flex justify-between px-8 relative items-center h-full">
      <Logo />
      <div className="flex gap-2 items-center ">
        <MobileSearch />
        <MobileNav />
        <ThemeBtn />
      </div>
    </div>
  );
};
export default MobileHeader;
