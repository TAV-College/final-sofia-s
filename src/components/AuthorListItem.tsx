import React, { useContext } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Author from "../models/author";
import { AuthorContext } from "../context/AuthorContext";

export default function AuthorListItem({
  author,
  navigation,
}: {
  author: Author;
  navigation: any;
}) {
  const { setSelectedAuthorId } = useContext(AuthorContext);

  const openAuthor = () => {
    setSelectedAuthorId(author.key.replace("/authors/", ""));
    navigation.navigate("Books", { authorName: author.name });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openAuthor}>
      <Text style={styles.name}>{author.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#e5e1f5ff",
    borderRadius: 6,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
