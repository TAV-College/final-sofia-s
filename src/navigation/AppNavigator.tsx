import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthorProvider } from "../context/AuthorContext";
import AuthorSearchScreen from "../pages/AuthorSearchScreen";
import BooksScreen from "../pages/BookScreen";
import FavouritesScreen from "../pages/FavoritesScreen";
import BookDetailScreen from "../pages/DetailScreen";
import {Button} from "react-native";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <AuthorProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Authors" component={AuthorSearchScreen} options={({navigation}) => ({
            headerRight: () => (
              <Button
                color="#562045ff"
                title="Favs ❤️"
                onPress={() => navigation.navigate("Favorites")}
              />
            )
          })} />
          <Stack.Screen name="Books" component={BooksScreen} options={({navigation}) => ({
            headerRight: () => (
              <Button
                color="#fb9696ff"
                title="Favs ❤️"
                onPress={() => navigation.navigate("Favorites")}
              />
            )
          })} />
          <Stack.Screen name="Favorites" component={FavouritesScreen} />
          <Stack.Screen name="Details" component={BookDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthorProvider>
  );
}
