import { useState } from "react";
import { AuthorFilter } from "./authors/AuthorFilter.tsx";
import { AuthorList } from "./authors/AuthorList.tsx";
import { BookList } from "./books/BookList.tsx";

export function App() {
  const [authorId, setAuthorId] = useState<string | null>(null);

  return (
    <main>
      <h1>Library</h1>
      <AuthorFilter value={authorId} onChange={setAuthorId} />
      <BookList authorId={authorId} />
      <h2>Authors</h2>
      <AuthorList />
    </main>
  );
}
