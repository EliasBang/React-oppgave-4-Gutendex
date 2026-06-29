import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { getBooks } from "../api/getBooks";

const categories = [
  "Adventure",
  "Fantasy",
  "Fiction",
  "Justice",
  "Morality",
  "Mystery",
  "Philosophy",
  "Power",
  "Romance",
  "Society",
  "Thriller",
  "Tragedy",
  "War",
];

export default function CategoriesMenu() {
  const {
    searchQuery,
    setIsLoading,
    setSearchResult,
    activeCategory,
    setActiveCategory,
  } = useContext(SearchContext);
  return (
    <div style={{ position: "absolute", left: "1rem", top: "1rem" }}>
      <p>Categories</p>
      <ul style={{ textAlign: "start" }}>
        {categories.map((category) => {
          return (
            <li
              className={`category-hover ${activeCategory === category ? "category-active" : ""}`}
              style={{
                cursor: "pointer",
              }}
              key={category}
              onClick={async () => {
                const newCategory = activeCategory === category ? "" : category;
                setActiveCategory(newCategory);
                setIsLoading(true);
                const data = await getBooks(newCategory, searchQuery, null);
                setSearchResult(data);
                setIsLoading(false);
              }}
            >
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
