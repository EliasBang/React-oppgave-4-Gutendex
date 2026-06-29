import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { FavoriteContext } from "../context/FavoriteContext";

export default function BookDetails() {
  const { book } = useContext(BookContext);
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const isFavorited = favorites.some((favorite) => favorite.id === book.id);
  return (
    <div>
      <button
        type="button"
        style={{
          borderRadius: "1rem",
          border: "solid 1px rgba(192, 132, 252, 0.5)",
          cursor: "pointer",
          backgroundColor: "#FFFFFF00",
        }}
        onClick={() => {
          if (isFavorited) {
            setFavorites((prev) =>
              prev.filter((storedBook) => storedBook.id !== book.id),
            );
          } else {
            setFavorites((prev) => [...prev, book]);
          }
        }}
      >
        {isFavorited ? "❤️" : "🤍"}
      </button>
      <h1>{book.title}</h1>
      <p>{book.authors}</p>
      <p>{book.summaries}</p>
      <p>{book.download_count}</p>
      <p>{book.subjects}</p>
      <p>{book.languages}</p>
      <p>{book.copyright}</p>
    </div>
  );
}
