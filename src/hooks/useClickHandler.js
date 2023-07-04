import { useEffect, useRef } from "react";

export function useClickHandler(handler, captureListener = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };
    document.addEventListener("click", handleClick, captureListener);

    return () => document.removeEventListener("click", handleClick, captureListener);
  }, [handler, captureListener]);

  return ref
}