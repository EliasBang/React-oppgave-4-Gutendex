import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { getBooks } from "../api/getBooks";

export default function PageNavigation() {
  const { setIsLoading, searchResult, setSearchResult, currentPage } =
    useContext(SearchContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <button
        style={{
          borderRadius: "0.5rem",
          border: "rgba(192, 132, 252, 0.5) solid 1px",
          cursor: "pointer",
        }}
        onClick={async () => {
          setIsLoading(true);
          const data = await getBooks(null, null, searchResult.previous);
          setSearchResult(data);
          setIsLoading(false);
        }}
      >
        Prev page
      </button>
      <p>{currentPage}</p>
      <button
        style={{
          borderRadius: "0.5rem",
          border: "rgba(192, 132, 252, 0.5) solid 1px",
          cursor: "pointer",
        }}
        onClick={async () => {
          setIsLoading(true);
          const data = await getBooks(null, null, searchResult.next);
          setSearchResult(data);
          setIsLoading(false);
        }}
      >
        Next page
      </button>
    </div>
  );
}
