import { useState, useEffect } from "react";

function useMultiMonitor() {
  const [isMultiMonitor, setIsMultiMonitor] = useState(false);

  useEffect(() => {
    const checkMultiMonitor = () => {
      const hasMultipleScreens = window.screen?.screens?.length > 1;
      const checks = [
        "isExtended" in window.screen && window.screen.isExtended,
        window.screen.availWidth > window.screen.width,
        window.screenLeft !== 0 || window.screenTop !== 0,
        window.matchMedia("(display-mode: extended)").matches,
        hasMultipleScreens,
        window.screen.availWidth > window.screen.width,
        window.outerWidth > window.screen.width,
        typeof window.screenX !== "undefined" &&
          (window.screenX < 0 || window.screenX > window.screen.width),
        window.screen.availLeft < 0 ||
          window.screen.availLeft + window.screen.availWidth >
            window.screen.width,
      ];
      setIsMultiMonitor(checks.some((check) => Boolean(check)));
    };

    checkMultiMonitor();

    const events = ["resize", "orientationchange", "screenorientation"];
    events.forEach((event) =>
      window.addEventListener(event, checkMultiMonitor)
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, checkMultiMonitor)
      );
    };
  }, []);

  return isMultiMonitor;
}

export default useMultiMonitor;

/* Use it like this:

import React from "react";
import useMultiMonitor from "./useMultiMonitor";

const MultiMonitorCheck = () => {
    const isMultiMonitor = useMultiMonitor();
    return <div>Multiple Monitors: {isMultiMonitor ? "Yes" : "No"}</div>;
};

export default MultiMonitorCheck;

*/
