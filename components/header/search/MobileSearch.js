import React from "react";
import { BsSearch } from "react-icons/bs";
import Searchresult from "./Searchresult";

const MobileSearch = (props) => {
  const [openSearch, setOpenSearch] = React.useState(false);
  const inputref = React.useRef(null);

  React.useEffect(() => {
    openSearch ? inputref.current.focus() : null;
  }, [openSearch]);

  return (
    <div>
      <button
        onClick={() => {
          setOpenSearch(true);
        }}
        className="absolute flex justify-center items-center right-24 bg-color-primery w-7 h-7  rounded-full top-[9px]"
      >
        <BsSearch className="text-white" />
      </button>
      {openSearch ? (
        <div className="fixed w-full h-full bg-black/75 top-0 left-0 flex justify-center items-center z-[10]">
          <div className="dark:bg-gray-200 bg-bg-main w-[90%] h-[500px] shadow-sm p-4 overflow-hidden dark:shadow-white shadow-black rounded-md ">
            <div className="relative">
              <BsSearch className="absolute dark:text-black text-white top-2 left-0 " />
              <input
                ref={inputref}
                type="text"
                placeholder="Search every coin want..."
                className="p-1 border-b-2 dark:border-black border-white bg-transparent dark:text-black text-white pl-6 w-full"
                onChange={props.inputHandler}
                value={props.inputEvent}
              />
              <button
                onClick={() => setOpenSearch(false)}
                className="text-white px-1 absolute bg-color-primery top-1 right-2 rounded-md"
              >
                close
              </button>
            </div>
            <Searchresult />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default MobileSearch;
