import React from "react";
import { FaUserCircle } from "react-icons/fa";
import User from "./User";
const DesktopUser = () => {
  return (
    <div className="relative">
      <button className="flex">
        <FaUserCircle className="text-2xl" />
      </button>
      <div className="absolute right-11 top-12 w-[250px] h-[300px]">
        <User />
      </div>
    </div>
  );
};

export default DesktopUser;
