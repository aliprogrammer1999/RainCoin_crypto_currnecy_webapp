import Link from "next/link";
import React from "react";
import { BsFire } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
const Searchresult = () => {
  return (
    <div className="mt-3 dark:text-black text-white shadow-lg">
      <h1 className="text-orange-500 flex gap-2 font-bold text-2xl">
        <BsFire />
        Tranding Coin
      </h1>
      <ul className="flex flex-col gap-3 w-full mt-2">
        <li className="border-2 border-orange-500 rounded-md ">
          <Link
            href="#"
            className="flex items-center justify-between gap-2 py-1 px-3 w-full"
          >
            <h1 className="flex items-center gap-2">
              <FaBitcoin />
              <span className="capitalize dark:text-white text-black lg:dark:text-white lg:text-white font-bold">
                bitcoin
              </span>
            </h1>
            <span className="font-bold dark:text-white text-black lg:dark:text-black lg:text-white">
              #1
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Searchresult;
