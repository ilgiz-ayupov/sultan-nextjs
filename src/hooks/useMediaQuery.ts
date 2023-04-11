import { useState, useEffect } from "react";

type Props = {
  minWidth?: number;
  maxWidth?: number;
};

export function useMediaQuery({ minWidth, maxWidth }: Props) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let mediaQuery = "";
    if (minWidth && maxWidth) {
      mediaQuery = `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
    } else if (minWidth) {
      mediaQuery = `(min-width: ${minWidth}px)`;
    } else if (maxWidth) {
      mediaQuery = `(min-width: ${minWidth}px)`;
    }

    if (!mediaQuery) {
      throw new Error(
        "В хук useMediaQuery необходимо передать хотя бы одно из значений: minWidth | maxWidth"
      );
    }

    const mediaQueryList = window.matchMedia(mediaQuery);

    const updateMatches = () => {
      setMatches(mediaQueryList.matches);
    };

    updateMatches();
    mediaQueryList.addEventListener("change", updateMatches);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatches);
    };
  }, [minWidth, maxWidth]);

  return matches;
}
