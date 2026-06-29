import { createContext, useState } from "react";

export const BookContext = createContext();

export default function BookProvider({ children }) {
  const [book, setBook] = useState({});
  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
}
