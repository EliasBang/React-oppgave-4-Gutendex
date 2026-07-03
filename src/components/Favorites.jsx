import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { DisplayContext } from "../context/DisplayContext";

/* This component takes care of displaying all the favorited books. */

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FavoriteContext);
  const { setBook } = useContext(BookContext);
  const { displayFavorites } = useContext(DisplayContext);

  return (
    <div
      style={{
        textAlign: "start",
      }}
      className={`absolute-right flex-column width-sidebar ${displayFavorites ? "open" : ""}`}
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
            >
              <Link
                to="/details"
                style={{ textDecoration: "none" }}
                className="link-hover"
                onClick={() => {
                  setBook(book);
                }}
              >
                {book.title}
              </Link>
              <button
                type="button"
                className="favorite-button"
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
