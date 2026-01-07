I built this small mobile app to help people find books based on authors. 
I used React Native, React Navigator, React Context, AsyncStorage and TypeScript, connecting everything to the Open Library API.
Users can search for an author and then tap on their name to see a list of their books. From there, they can add any book to their favorites. 
In the favorites section, the user can check more details about each book. 
(I initially tried to include a book description, but since the API data was inconsistent, I decided to remove that part to keep the app clean). 
It is a simple app, but it meets all the project requirements.

The componets:
-Header: The title bar at the top of every screen.
-AuthorListItem: The rows you see when searching for authors.
-BookListItem: The rows that show the books in the author's list.
-BookCardFavs: A special design I made just for the Favorites screen.
-ClearSearchBar: A search bar that has a handy "X" button to clear your text instantly. 