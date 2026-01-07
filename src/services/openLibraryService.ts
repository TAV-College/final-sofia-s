import  Author  from "../models/author";
import Book from "../models/book";

export const searchAuthors = async (query: string): Promise<Author[]> => {
  if (!query) return [];

  const response = await fetch(
    `https://openlibrary.org/search/authors.json?q=${encodeURIComponent(query)}`
  );

  const data = await response.json();

  return data.docs.map((a: any) => ({
    key: a.key.replace("/authors/", ""),
    name: a.name,
    work_count: a.work_count,
  }));
};

export const fetchBooksByAuthor = async (authorId: string, authorName: string): Promise<Book[]> => {
  const response = await fetch(
    `https://openlibrary.org/authors/${authorId}/works.json`
  );

  const data = await response.json();

  return data.entries.map((b: any) => ({
    key: b.key,
    title: b.title,
    author: authorName,
    cover: b.covers?.[0]
      ? `https://covers.openlibrary.org/b/id/${b.covers[0]}-M.jpg`
      : "https://via.placeholder.com/150",
  }));
};
