import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { Link } from "react-router-dom";

export default function BookDetails() {
  const { book } = useContext(BookContext);
  const { favorites, setFavorites } = useContext(FavoriteContext);

  if (!book?.id) {
    return (
      <div>
        <p>No book selected.</p>
        <Link to="/" className="link-hover">
          Back to search
        </Link>
      </div>
    );
  }
  const isFavorited = favorites.some((favorite) => favorite.id === book.id);
  {
    /* This part is written by AI*/
  }
  const authors = book.authors?.map((a) => a.name).join(", ") || "Unknown";
  const subjects = book.subjects?.join(", ") || "-";
  const languages = book.languages?.join(", ") || "-";
  const coverImage = book.formats?.["image/jpeg"];
  const readLink =
    book.formats?.["text/html"] ||
    book.formats?.["application/epub+zip"] ||
    book.formats?.["text/plain; charset=us-ascii"];
  {
    /*AI part finished */
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Link to="/" className="link-hover">
          Back to search
        </Link>
        <button
          type="button"
          style={{
            borderRadius: "1rem",
            border: "solid 1px rgba(192, 132, 252, 0.5)",
            cursor: "pointer",
            backgroundColor: "#FFFFFF00",
            width: "2rem",
            height: "2rem",
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
      </div>
      {coverImage && <img src={coverImage} alt={`Cover of ${book.title}`} />}
      <h1>{book.title}</h1>
      <p>
        <span className="text-h">Author(s):</span> {authors}
      </p>
      <p>
        <span className="text-h">Summary:</span> {book.summaries}
      </p>
      <p>
        <span className="text-h">Downloads:</span> {book.download_count}
      </p>
      <p>
        <span className="text-h">Subjects:</span> {subjects}
      </p>
      <p>
        <span className="text-h">Languages:</span> {languages}
      </p>
      <p>
        <span className="text-h">Read here:</span>{" "}
        <a href={readLink} className="link-hover">
          {readLink}
        </a>
      </p>
    </div>
  );
}
