import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

{
  /* Keeps track of favorited books */
}

export const FavoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  return (
    <FavoriteContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
}
