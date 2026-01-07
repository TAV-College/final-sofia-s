import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Book from "../models/book"; 

export default function BookCardFavs({ book, onPress }: { 
  book: Book; 
  onPress: () => void; 
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>{book.title}</Text>
        <Text style={styles.author}>{book.author || "Unknown Author"}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { 
    flexDirection: "row", 
    marginBottom: 10, 
    alignItems: "center", 
    backgroundColor: "#fbfddc", 
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cover: { width: 60, height: 90, marginRight: 15, borderRadius: 6 },
  info: { flex: 1 },
  title: { fontWeight: "bold", fontSize: 18, color: "#000000" },
  author: { fontWeight: "bold", fontSize: 14, color: "#555" },
  year: { fontWeight: "bold", fontSize: 14, color: "#888" },
});