import "./App.css";
import NavBar from "./components/NavBar";
import CategoriesMenu from "./components/CategoriesMenu";
import SearchProvider from "./context/SearchContext";
import FavoriteProvider from "./context/FavoriteContext";
import Favorites from "./components/Favorites";
import BookProvider from "./context/BookContext";
import { Outlet } from "react-router-dom";
import DisplayProvider from "./context/DisplayContext";

function App() {
  return (
    <>
      <SearchProvider>
        <FavoriteProvider>
          <BookProvider>
            <DisplayProvider>
              <header>
                <NavBar />
                <CategoriesMenu />
                <Favorites />
              </header>
              <main>
                <Outlet />
              </main>
            </DisplayProvider>
          </BookProvider>
        </FavoriteProvider>
      </SearchProvider>
    </>
  );
}

export default App;
