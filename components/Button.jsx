import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineMenuFold, AiOutlineClose } from 'react-icons/ai'
import { motion } from "framer-motion";


export const ThemeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      className="transition-all duration-200"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
    </button>
  );
};

export const Navbtn = ({ toggle, navBtnEvent }) => {
  const Path = props => (
    <motion.path
      strokeWidth="3"
      stroke="white"

      {...props}
    />
  );
  return (
    <button
      onClick={toggle}
      className={`${navBtnEvent ? "right-[285px] pl-[2px]" : "right-16"} bg-color-primery top-1/2 -translate-y-1/2 absolute z-[999] transition-all duration-1000 rounded-full w-8 h-8 pt-1 flex justify-center items-center`}
    >
      <svg width="20" height="20" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
};
