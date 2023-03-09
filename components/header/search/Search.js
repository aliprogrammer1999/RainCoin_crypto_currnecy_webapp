import React from "react";
import { useWindowSize } from "@/hook/useWindowSize";
import MobileSearch from "./MobileSearch";
import DesktopSearch from "./DesktopSearch";
const Search = () => {
  const [inputSearch, setInputSearch] = React.useState("");
  const windowSize = useWindowSize();
  return (
    <div>
      {windowSize <= 900 ? (
        <MobileSearch
          inputEvent={inputSearch}
          inputHandler={(e) => setInputSearch(e.target.value)}
        />
      ) : (
        <DesktopSearch />
      )}
    </div>
  );
};

export default Search;
