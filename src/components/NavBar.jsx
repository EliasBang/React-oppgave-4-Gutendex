import { useContext } from "react";
import Search from "./Search";
import { DisplayContext } from "../context/DisplayContext";

{
  /* Contains the search bar, and the toggle on/off button for the category menu and favorites list */
}

export default function NavBar() {
  const {
    displayCategories,
    setDisplayCategories,
    displayFavorites,
    setDisplayFavorites,
  } = useContext(DisplayContext);
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "1rem",
      }}
    >
      <button
        style={{
          borderRadius: "1rem",
          width: "2rem",
          height: "2rem",
          backgroundColor: "#FFFFFF00",
          cursor: "pointer",
        }}
        className="menu-toggle"
        onClick={() => {
          setDisplayCategories(!displayCategories);
        }}
      >
        📦
      </button>
      <Search />
      <button
        style={{
          borderRadius: "1rem",
          backgroundColor: "#FFFFFF00",
          cursor: "pointer",
          width: "2rem",
          height: "2rem",
        }}
        className="menu-toggle"
        onClick={() => {
          setDisplayFavorites(!displayFavorites);
        }}
      >
        ❤️
      </button>
    </nav>
  );
}
