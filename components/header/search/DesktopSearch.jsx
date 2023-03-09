import React from "react";
import { BsSearch } from "react-icons/bs";
const DesktopSearch = () => {
  const [inputWidth, setInputWidth] = React.useState(false);
  return (
    <div
      className={`relative transition-all duration-300 ${
        inputWidth ? "w-[350px]" : "w-[250px]"
      }`}
    >
      <BsSearch className="absolute text-sm top-[10.5px] left-4" />
      <input
        type="text"
        placeholder="Search every coin want... "
        className="pr-2 pl-10 w-full py-[6px] rounded-full"
        onFocus={() => setInputWidth(true)}
        onBlur={() => setInputWidth(false)}
      />{" "}
    </div>
  );
};

export default DesktopSearch;
