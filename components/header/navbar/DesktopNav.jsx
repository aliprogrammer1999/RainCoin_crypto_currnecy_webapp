import React from "react";
import Link from "next/link";
const DesktopNav = () => {
  const navList = [
    { title: "Home", link_list: "/" },
    { title: "Exchange", link_list: "/exchange" },
    { title: "Coin", link_list: "/coin" },
    { title: "AboutUs", link_list: "/aboutus" },
  ];

  return (
    <div>
      <ul className="w-full flex gap-5">
        {navList.map((i, k) => (
          <li key={k}>
            <Link className=" hover:text-gray-500" href={i.link_list}>
              {i.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNav;
