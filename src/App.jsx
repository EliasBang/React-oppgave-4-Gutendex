import "./App.css";
import NavBar from "./components/NavBar";
import CategoriesMenu from "./components/CategoriesMenu";
import SearchProvider from "./context/SearchContext";
import SearchResult from "./components/SearchResult";
import FavoriteProvider from "./context/FavoriteContext";
import Favorites from "./components/Favorites";
import BookProvider from "./context/BookContext";

function App() {
  return (
    <>
      <SearchProvider>
        <FavoriteProvider>
          <BookProvider>
            <header>
              <NavBar />
              <CategoriesMenu />
              <Favorites />
            </header>
            <main>
              <SearchResult />
            </main>
          </BookProvider>
        </FavoriteProvider>
      </SearchProvider>
    </>
  );
}

export default App;
