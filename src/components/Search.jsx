import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { getBooks } from "../api/getBooks";

export default function Search() {
  const { setSearchQuery, setIsLoading, setSearchResult, activeCategory } =
    useContext(SearchContext);
  const [input, setInput] = useState("");

  const doSearch = async () => {
    setIsLoading(true);
    setSearchQuery(input);
    const data = await getBooks(activeCategory, input, null);
    setSearchResult(data);
    setIsLoading(false);
    console.log(data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        style={{
          borderRadius: "1rem",
          width: "15rem",
          marginRight: "0.5rem",
          border: "rgba(192, 132, 252, 0.5) solid 1px",
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={async (event) => {
          if (event.key === "Enter") {
            await doSearch();
          }
        }}
      />
      <button
        type="button"
        style={{
          borderRadius: "1rem",
          cursor: "pointer",
          border: "rgba(192, 132, 252, 0.5) solid 2px",
        }}
        onClick={async () => {
          await doSearch();
        }}
      >
        Go
      </button>
    </div>
  );
}
