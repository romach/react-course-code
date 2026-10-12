import { useEffect, useState } from "react";
import type { Book, Page } from "../api/types.ts";

export function BookList() {
  const [page, setPage] = useState<Page<Book> | null>(null);

  useEffect(() => {
    fetch("/api/books?sort=year,desc")
      .then((response) => response.json())
      .then(setPage);
  }, []);

  const books = page?.content ?? [];
  const total = page?.page.totalElements ?? 0;

  return (
    <>
      <p>
        Showing {books.length} of {total} books
      </p>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} ({book.year}) by{" "}
            {book.authors.map((author) => author.name).join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}
