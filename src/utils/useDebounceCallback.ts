import { useCallback, useEffect, useRef } from "react";

type DebounceCallback<T extends unknown[]> = (...args: T) => void;

function useDebounceCallback<T extends unknown[]>(
  callback: DebounceCallback<T>,
  delay: number,
  deps: React.DependencyList = []
): DebounceCallback<T> {
  const timeoutRef = useRef<number | undefined>();

  const debouncedCallback = useCallback(
    (...args: T) => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [callback, delay, ...deps]
  );

  useEffect(
    () => () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...deps]
  );

  return debouncedCallback;
}

export { useDebounceCallback };
