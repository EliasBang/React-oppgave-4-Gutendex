import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../context/BookContext";
import { FavoriteContext } from "../context/FavoriteContext";
import { SearchContext } from "../context/SearchContext";
import PageNavigation from "./PageNavigation";

/* Handles displaying the search results */

export default function SearchResult() {
  const {
    isLoading /*bool*/,
    searchResult /*object*/,
    currentPage /*number*/,
  } = useContext(SearchContext);
  const { favorites /*array*/, setFavorites } = useContext(FavoriteContext);
  const { setBook } = useContext(BookContext);

  return (
    <div
      style={{
        alignItems: "center",
      }}
      className="flex-column"
    >
      {/* Handles moving between pagination and displaying current page*/}

      <header>
        <PageNavigation />
      </header>

      {/* Creates a list of the titles of all the book results recieved */}

      <main style={{ textAlign: "start" }}>
        {isLoading ? (
          "Loading..."
        ) : (
          <ol start={currentPage !== "?" ? (currentPage - 1) * 32 + 1 : 1}>
            {searchResult.results.map((book) => {
              {
                /* Checks if the book is favorited */
              }

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
                    alignItems: "center",
                  }}
                >
                  <Link
                    style={{ textDecoration: "none" }}
                    className="link-hover"
                    onClick={() => {
                      setBook(book);
                    }}
                    to="/details"
                  >
                    {book.title}
                  </Link>
                  <button
                    type="button"
                    className="favorite-button"
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

      {/* Handles moving between pagination and displaying current page*/}

      <footer>
        <PageNavigation />
      </footer>
    </div>
  );
}
