import { useEffect, useState } from "react";

type WindowState = {
    width: number | undefined
    height: number | undefined
  }
  // Hook
function useWindowSize() {

const [windowSize, setWindowSize] = useState<WindowState>({
    width: undefined,
    height: undefined,
});

useEffect(() => {
    function handleResize() {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
}, []);
return windowSize;
}

export default useWindowSize