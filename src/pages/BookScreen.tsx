import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { AuthorContext } from "../context/AuthorContext";
import { fetchBooksByAuthor } from "../services/openLibraryService";
import BookListItem from "../components/BookListItem";
import Book  from "../models/book";
import Header from "../components/Header";

export default function BooksScreen({ route }: any) {
  const { selectedAuthorId } = useContext(AuthorContext);
  const [books, setBooks] = useState<Book[]>([]);
  
  const { authorName } = route.params;

  useEffect(() => {
    if (selectedAuthorId) {
      fetchBooksByAuthor(selectedAuthorId, authorName).then(setBooks);
    }
  }, [selectedAuthorId]);

  return (
    <View style={{ padding: 16, flex: 1 }}>
      <Header title="Books" />
      <FlatList
        data={books}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <BookListItem book={item} />}
      />
    </View>
  );
}
