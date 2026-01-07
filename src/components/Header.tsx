import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthorContext } from "../context/AuthorContext"; 

export default function Header({ title }: { title: string }) {
  const { favoriteBooks } = useContext(AuthorContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>
        Books that I ❤️ {favoriteBooks.length}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "#fcdaf5",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#401137",
  },
  count: {
    color: "#1e051d",
    fontSize: 18,
    fontWeight: "bold",
  },
});