import { createContext, useEffect, useState } from "react";

export const DisplayContext = createContext();

const isLandscape = () => window.matchMedia("(min-width:1025px").matches;

export default function DisplayProvider({ children }) {
  const [displayCategories, setDisplayCategories] = useState(isLandscape);
  const [displayFavorites, setDisplayFavorites] = useState(isLandscape);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:1025px)");

    const handleChange = (event) => {
      setDisplayCategories(event.matches);
      setDisplayFavorites(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <DisplayContext.Provider
      value={{
        displayCategories,
        setDisplayCategories,
        displayFavorites,
        setDisplayFavorites,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
