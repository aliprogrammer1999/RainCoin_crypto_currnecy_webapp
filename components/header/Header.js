import React from "react";
import { useWindowSize } from "@/hook/useWindowSize";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import MarketDataHeader from "./MarketDetaHead";
const Header = () => {
  const windowSize = useWindowSize();
  console.log(windowSize);
  return (
    <header className="flex flex-col gap-3">
      <MarketDataHeader />
      <div className="bg-gray-200 dark:bg-black/40 py-2">
        {windowSize.width <= 900 ? <MobileHeader /> : <DesktopHeader />}
      </div>
    </header>
  );
};

export default Header;
