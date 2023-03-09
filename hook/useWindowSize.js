import React from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: undefined,
    height: undefined,
  });

  const handleResize = React.useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    }),
      [windowSize];
  });
  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
