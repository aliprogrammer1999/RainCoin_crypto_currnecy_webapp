import React from "react";
import { useSizeWindow } from "@/hook/useWindowSize";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import MarketDataHeader from "./MarketDetaHead";
const Header = () => {
  const windowSize = useSizeWindow();
  return (
    <header className="flex flex-col gap-3">
      <MarketDataHeader />
      <div className="bg-gray-200 dark:bg-black/40 py-2">
        {windowSize.width >= 900 ? <DesktopHeader /> : <MobileHeader />}
      </div>
    </header>
  );
};

export default Header;
