import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/React-oppgave-4-Gutendex/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "details",
        element: <BookDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);
