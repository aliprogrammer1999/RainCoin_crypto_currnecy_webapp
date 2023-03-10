import React from "react";
import { BsSearch } from "react-icons/bs";
import Searchresult from "./SearchResult";
const DesktopSearch = () => {
  const [inputWidth, setInputWidth] = React.useState(false);
  return (
    <div
      className={`relative transition-all duration-300 ${
        inputWidth ? "w-[350px]" : "w-[250px]"
      }`}
    >
      <BsSearch className="absolute z-[11] text-sm top-[10.5px] left-4" />
      <input
        type="text"
        placeholder="Search every coin want... "
        className="pr-2 pl-10 w-full py-[6px] z-[10] relative rounded-full shadow"
        onFocus={() => setInputWidth(true)}
        onBlur={() => setInputWidth(false)}
      />{" "}
      <div
        className={`absolute ${
          inputWidth ? "h-max p-2 pt-5" : "h-0"
        } w-[97%] dark:bg-gray-200 dark:text-black bg-bg-main text-white overflow-hidden top-3 right-[5px] rounded-b-md`}
      >
        <Searchresult />
      </div>
    </div>
  );
};

export default DesktopSearch;
