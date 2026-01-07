import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AuthorContext } from "../context/AuthorContext";
import Book from "../models/book";
import { useNavigation } from "@react-navigation/native";

export default function BookListItem({ book }: { book: Book }) {
  const { favoriteBooks, setFavoriteBooks } = useContext(AuthorContext);
  const navigation = useNavigation<any>();

  const isFav = favoriteBooks.some((b) => b.key === book.key);

  const toggleFavorite = () => {
    if (isFav) {
      setFavoriteBooks(favoriteBooks.filter((b) => b.key !== book.key));
    } else {
      setFavoriteBooks([...favoriteBooks, book]);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate("Details", { book })}
    >
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <TouchableOpacity onPress={toggleFavorite} style={styles.favButton}>
          <Text>{isFav ? "❤️ Remove" : "🤍 Add"}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10, backgroundColor: "#f4c8ecff", marginBottom: 10, borderRadius: 8 },
  cover: { width: 60, height: 90, borderRadius: 4 },
  info: { marginLeft: 10, flex: 1, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "bold" },
  author: { fontSize: 14, color: "#666" },
  favButton: { marginTop: 5 }
});