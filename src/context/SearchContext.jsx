import { createContext, useEffect } from "react";
import { useState } from "react";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [searchResult, setSearchResult] = useState({
    count: -1,
    next: "",
    previous: "",
    results: [],
  });

  const [activeCategory, setActiveCategory] = useState("");
  const [currentPage, setCurrentPage] = useState("?");

  // Figures out what page we're on, since the API doesn't expose it.
  useEffect(() => {
    if (searchResult?.next) {
      setCurrentPage(
        Number(new URL(searchResult.next).searchParams.get("page")) - 1,
      );
    } else if (searchResult?.previous) {
      setCurrentPage(
        Number(new URL(searchResult.previous).searchParams.get("page")) + 1,
      );
    }
  }, [searchResult]);

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        isLoading,
        setIsLoading,
        searchResult,
        setSearchResult,
        activeCategory,
        setActiveCategory,
        currentPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
