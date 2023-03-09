import React from "react";
import { ThemeBtn } from "../Button";
import Logo from "./logo";
import DesktopNav from "./navbar/DesktopNav";
import Search from "./search/Search";
import DesktopUser from "./user/DesktopUser";

const DesktopHeader = () => {
  return (
    <div className="px-9 flex justify-between items-center">
      <div className="flex gap-8 items-center">
        <Logo />
        <DesktopNav />
      </div>
      <div className="flex items-center gap-6">
        <Search />
        <DesktopUser />
        <ThemeBtn />
      </div>
    </div>
  );
};
export default DesktopHeader;
