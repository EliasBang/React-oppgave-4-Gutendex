import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);

  return (
    <div
      style={{
        position: "absolute",
        right: "1rem",
        top: "1rem",
        textAlign: "start",
        display: "flex",
        flexDirection: "column",
        width: "18rem",
      }}
    >
      <p>Favorites:</p>
      <ul style={{ padding: 0 }}>
        {favorites.map((book) => {
          return (
            <li
              key={book.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "solid 1px rgba(192, 132, 252, 0.5)",
                marginBottom: "3px",
                padding: "0.2rem 0 0.3rem",
                alignItems: "center",
              }}
              className="search-result"
            >
              <p>{book.title}</p>
              <button
                type="button"
                style={{
                  borderRadius: "1rem",
                  border: "solid 1px rgba(192, 132, 252, 0.5",
                  cursor: "pointer",
                  backgroundColor: "#FFFFFF00",
                  width: "2rem",
                  height: "2rem",
                }}
                onClick={() => {
                  setFavorites((prev) =>
                    prev.filter((favorite) => favorite.id !== book.id),
                  );
                }}
              >
                ❤️
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
