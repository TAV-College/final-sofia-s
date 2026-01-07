import React, { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  Book  from "../models/book";

interface AuthorContextType {
  selectedAuthorId: string | null;
  setSelectedAuthorId: (id: string | null) => void;
  favoriteBooks: Book[];
  setFavoriteBooks: (books: Book[]) => void;
}

export const AuthorContext = createContext<AuthorContextType>({
  selectedAuthorId: null,
  setSelectedAuthorId: () => {},
  favoriteBooks: [],
  setFavoriteBooks: () => {},
});

export const AuthorProvider = ({ children }: { children: ReactNode }) => {
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
  const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);

  useEffect(() => {
    const load = async () => {
      const stored = await AsyncStorage.getItem("favourite_books");
      if (stored) setFavoriteBooks(JSON.parse(stored));
    };
    load();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(
      "favourite_books",
      JSON.stringify(favoriteBooks)
    );
  }, [favoriteBooks]);

  return (
    <AuthorContext.Provider
      value={{selectedAuthorId, setSelectedAuthorId, favoriteBooks, setFavoriteBooks}} >
      {children}
    </AuthorContext.Provider>
  )
}
