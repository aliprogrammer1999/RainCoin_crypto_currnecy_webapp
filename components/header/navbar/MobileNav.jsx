import React from "react";
import { motion, useCycle } from "framer-motion";
import { Navbtn } from "@/components/Button";
import Link from "next/link";
import { GrBitcoin } from "react-icons/gr";
import { BsGithub, BsInstagram, BsTelegram } from "react-icons/bs";
import User from "../user/User";

const navList = [
  { title: "Home", link_list: "/" },
  { title: "Exchange", link_list: "/exchange" },
  { title: "Coin", link_list: "/coin" },
  { title: "AboutUs", link_list: "/aboutus" },
];

const sidebar = {
  open: {
    width: 300,
    padding: "30px 13px",
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 1,
    },
  },
  closed: {
    width: 0,
    padding: 0,
    transition: {
      delay: 0,
      stiffness: 160,
      damping: 100,
    },
  },
};

// motion Menu list
const menu_Nav_motion = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// motion li
const List_item_motion = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <div
        className={
          isOpen
            ? "fixed w-full top-0  right-0 m h-full bg-black/70"
            : "bg-transparent"
        }
      >
        <motion.div
          className="w-[300px] fixed overflow-hidden flex flex-col justify-between  items-center text-black top-0 right-0 h-full dark:bg-white bg-bg-main shadow-md dark:shadow-gray-300 shadow-gray-800"
          variants={sidebar}
        >
          {/* navbar header logo  */}
          <motion.div
            variants={List_item_motion}
            className="flex flex-col items-center"
          >
            <h1 className="flex items-center font-bold dark:text-black text-white ">
              <span className="text-4xl text-color-primery">R</span>ain
              <span className="text-4xl text-color-primery">C</span>oin
              <GrBitcoin className="text-4xl" />
            </h1>
            <p className="text-xs mt-1 px-3 text-center dark:text-black text-white">
              Lorem ipsum, unde ducimus id sapiente rerum incidunt voluptas
              optio iure.
            </p>
          </motion.div>

          {/* navbar item */}
          <motion.ul
            variants={menu_Nav_motion}
            className="w-full flex flex-col gap-3"
          >
            {navList.map((i, k) => (
              <motion.li
                key={k}
                whileHover={{ scale: 1.05 }}
                variants={List_item_motion}
                className="w-full"
              >
                <Link
                  href={i.link_list}
                  className="dark:text-black text-white bg-[#242424] dark:bg-gray-300 block w-full p-4 font-bold rounded-md text-center"
                >
                  {i.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
          {/*user component */}
          <User />
          <div className="dark:text-black text-white flex gap-3 font-bold text-2xl -mt-4">
            <button>
              <BsGithub />
            </button>
            <button>
              <BsTelegram />
            </button>
            <button>
              <BsInstagram />
            </button>
          </div>
        </motion.div>
      </div>
      {/* navbar Button  */}
      <Navbtn toggle={() => toggleOpen()} navBtnEvent={isOpen} />
    </motion.nav>
  );
};

export default MobileNav;
