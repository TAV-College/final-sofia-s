import React, { useContext } from "react";
import { View, Text, Image, Button, StyleSheet, ScrollView } from "react-native";
import Book from "../models/book";
import { AuthorContext } from "../context/AuthorContext"; 
import Header from "../components/Header";

export default function BookDetailScreen({ route }: any) {
  const { book }: { book: Book } = route.params;
  const { favoriteBooks, setFavoriteBooks } = useContext(AuthorContext);

  const isFav = favoriteBooks.some((b) => b.key === book.key);

  const toggleFavorite = () => {
    if (isFav) {
      setFavoriteBooks(favoriteBooks.filter((b) => b.key !== book.key));
    } else {
      setFavoriteBooks([...favoriteBooks, book]);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <Header title="Details" />
        
        <Image source={{ uri: book.cover }} style={styles.cover} />
        
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>By: {book.author || "Unknown Author"}</Text>

        <View style={styles.buttonContainer}>
          <Button
            color="#3f1236"
            title={isFav ? "Remove from Favorites" : "Add to Favorites"}
            onPress={toggleFavorite}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#fcdaf5",
  },
  container: { 
    padding: 16, 
    alignItems: "center", 
  },
  cover: { 
    width: 220, 
    height: 320, 
    marginBottom: 20, 
    borderRadius: 12,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 8, 
    textAlign: "center",
    color: "#401137" 
  },
  author: { 
    fontSize: 18, 
    fontStyle: "italic",
    marginBottom: 20,
    color: "#6b1a5a" 
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 25,
    borderRadius: 8,
    overflow: "hidden"
  },
  descriptionBox: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f2b3e6",
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#3f1236",
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    textAlign: "left",
  }
});