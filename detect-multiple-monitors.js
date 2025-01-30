function detectMultipleMonitors() {
  if ("isExtended" in window.screen) {
    return window.screen.isExtended;
  }
  return (
    window.screen.availWidth > window.screen.width ||
    window.screenLeft !== 0 ||
    window.screenTop !== 0 ||
    window.matchMedia("(display-mode: extended)").matches
  );
}

console.log(detectMultipleMonitors());
