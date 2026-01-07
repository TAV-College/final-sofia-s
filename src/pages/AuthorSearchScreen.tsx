import React, { useState, useEffect } from "react";
import { View, TextInput, FlatList } from "react-native";
import { searchAuthors } from "../services/openLibraryService";
import AuthorListItem from "../components/AuthorListItem";
import Author from "../models/author";
import Header from "../components/Header";
import ClearButton from "../components/ClearButton";

export default function AuthorSearchScreen({ navigation }: any) {
  const [query, setQuery] = useState("Stephen King");
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    searchAuthors(query).then(setAuthors);
  }, [query]);

  return (
    <View style={{ padding: 16, flex: 1}}>
      <Header title="Authors"/>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
  <TextInput
    value={query}
    onChangeText={setQuery}
    placeholder="Search for an author..."
    style={{flex: 1, borderWidth: 1, borderColor: "#fff7fdff", padding: 8, borderRadius: 6, backgroundColor: "rgba(247, 199, 242, 0.3)" }} />

  <ClearButton onPress={() => setQuery("")} />
</View>

      <FlatList
        data={authors}
        keyExtractor={(item: any) => item.key}
        renderItem={({ item }) => (
          <AuthorListItem author={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
