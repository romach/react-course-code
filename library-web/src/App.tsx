import { AuthorList } from "./authors/AuthorList.tsx";
import { BookList } from "./books/BookList.tsx";

export function App() {
  return (
    <main>
      <h1>Library</h1>
      <BookList />
      <h2>Authors</h2>
      <AuthorList />
    </main>
  );
}
