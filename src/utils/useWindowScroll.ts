import { useEffect, useState } from "react";
import { useDebounceCallback } from "./useDebounceCallback";

type ScrollMode = "up" | "down";

type ScrollProps = {
  onScroll: (mode: ScrollMode) => void;
};

const useGetScroll = (props?: ScrollProps) => {
  const [scrollMode, setScrollMode] = useState<ScrollMode | null>();
  const [scrollYPos, setScrollYPos] = useState<number | null>();

  const throttled = useDebounceCallback((mode: ScrollMode) => {
    setScrollMode(mode);
  }, 100);

  useEffect(() => {
    let lastScrollY = 0;
    window.addEventListener("scroll", () => {
      const currentY = window.scrollY;
      setScrollYPos(currentY);
      if (currentY > lastScrollY) {
        throttled("down");
        props?.onScroll("down");
      } else {
        throttled("up");
        props?.onScroll("up");
      }
      lastScrollY = currentY;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, props?.onScroll]);

  return { scrollMode, scrollYPos };
};

export default useGetScroll;
