import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import PageNavigation from "./PageNavigation";
import { FavoriteContext } from "../context/FavoriteContext";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";

export default function SearchResult() {
  const { isLoading, searchResult, currentPage } = useContext(SearchContext);
  const { favorites, setFavorites } = useContext(FavoriteContext);

  const { setBook } = useContext(BookContext);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <header>
        <PageNavigation />
      </header>

      <main style={{ textAlign: "start" }}>
        {isLoading ? (
          "Loading..."
        ) : (
          <ol start={currentPage !== "?" ? (currentPage - 1) * 32 + 1 : 1}>
            {searchResult.results.map((book) => {
              const isFavorited = favorites.some(
                (favorite) => favorite.id === book.id,
              );
              return (
                <li
                  key={book.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "solid 1px rgba(192, 132, 252, 0.5)",
                    marginBottom: "3px",
                    padding: "0.2rem 0 0.3rem",
                  }}
                  className="search-result"
                >
                  <Link
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    onClick={() => {
                      setBook(book);
                    }}
                    to="/details"
                  >
                    {book.title}
                  </Link>
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
                          prev.filter(
                            (storedBook) => storedBook.id !== book.id,
                          ),
                        );
                      } else {
                        setFavorites((prev) => [...prev, book]);
                      }
                    }}
                  >
                    {isFavorited ? "❤️" : "🤍"}
                  </button>
                </li>
              );
            })}
          </ol>
        )}
        {searchResult.count === 0 ? "No result..." : ""}
      </main>

      <footer>
        <PageNavigation />
      </footer>
    </div>
  );
}
