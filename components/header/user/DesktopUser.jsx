import React from "react";
import { FaUserCircle } from "react-icons/fa";
import userImg from "../../../public/assest/user_img.jpg";
import Image from "next/image";
import User from "./User";
const DesktopUser = () => {
  const [openUser, setUserbox] = React.useState(false);
  return (
    <div className="relative">
      <button className="flex" onClick={() => setUserbox(!openUser)}>
        <Image
          src={userImg}
          width={300}
          heigth={300}
          className={`w-8 h-8 object-cover hover:border ${
            openUser ? "border border-color-primery" : ""
          } transition-all duration-400 rounded-full`}
        />
      </button>
      <div
        className={`absolute w-[250px] transition-all duration-200  right-1 top-11 overflow-hidden ${
          openUser ? " h-[300px]" : " h-0"
        }`}
      >
        <User />
      </div>
    </div>
  );
};

export default DesktopUser;
