import React, { useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { AuthorContext } from "../context/AuthorContext";
import Header from "../components/Header";
import BookCardFavs from "../components/BookCardFavs";

export default function FavouritesScreen({navigation}: any) {
  const { favoriteBooks } = useContext(AuthorContext);

  if (favoriteBooks.length === 0) {
    return <Text style={{ padding: 20 }}>No favourites yet</Text>;
  }

  return (
    <View style={{ padding: 16, flex: 1 }}>
    <Header title="Favorites"/>
      <FlatList
        data={favoriteBooks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <BookCardFavs book={item} onPress={ ()=> navigation.navigate("Details", {book:item})} />}
      />
    </View>
  );
}
