import React, { useEffect } from "react";

export const useSizeWindow = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const windowResizeHandler = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", windowResizeHandler);
    return () => {
      window.removeEventListener("resize", windowResizeHandler);
    };
  }, []);
  return windowSize;
};
