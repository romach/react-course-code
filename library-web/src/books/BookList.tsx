import type { Book, Page } from "../api/types.ts";
import { useFetch } from "../api/useFetch.ts";

type BookListProps = {
  authorId: string | null;
};

export function BookList({ authorId }: BookListProps) {
  const url = authorId
    ? `/api/books?authorId=${authorId}&sort=year,desc`
    : "/api/books?sort=year,desc";
  const books = useFetch<Page<Book>>(url);

  if (books.status === "loading") {
    return <p>Loading books...</p>;
  }
  if (books.status === "error") {
    return <p>Could not load books: {books.error.message}</p>;
  }

  const { content, page } = books.data;

  return (
    <>
      <p>
        Showing {content.length} of {page.totalElements} books
      </p>
      <ul>
        {content.map((book) => (
          <li key={book.id}>
            {book.title} ({book.year}) by{" "}
            {book.authors.map((author) => author.name).join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}
