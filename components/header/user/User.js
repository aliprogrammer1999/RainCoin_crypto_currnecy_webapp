import React from "react";
import Image from "next/image";
import userimg from "../../../public/assest/user_img.jpg";
import { FaUserEdit } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
const User = () => {
  return (
    <div className="dark:bg-bg-main bg-gray-200 lg:dark:bg-gray-200 lg:bg-bg-main dark:text-white text-black lg:dark:text-black lg:text-white w-full rounded-md py-4 px-3">
      <div className="flex gap-3 mb-3">
        <Image
          src={userimg}
          width={400}
          height={400}
          className="w-14 h-14 border-2 border-color-primery object-cover select-none rounded-full"
        />
        <div className="flex justify-center flex-col">
          <h1 className="flex text-xl font-bold items-center gap-2">
            Alirg
            <button className="bg-color-primery text-sm p-[2px] pl-[5px] rounded-full">
              <Link href="/profile">
                <FaUserEdit />
              </Link>
            </button>
          </h1>
          <h3 className="text-[10px]">ali.programer.1999@gmail.com</h3>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <motion.button
          className="dark:bg-[#242424] bg-gray-400 py-1 dark:text-white text-black rounded-sm w-full"
          whileHover={{ scale: 1.04 }}
        >
          WatchList
        </motion.button>
        <motion.button
          className="dark:bg-[#242424] bg-gray-400 py-1 dark:text-white text-black rounded-sm w-full"
          whileHover={{ scale: 1.04 }}
        >
          Logout
        </motion.button>
      </div>
    </div>
  );
};
export default User;
