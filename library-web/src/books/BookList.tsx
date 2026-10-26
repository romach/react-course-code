import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "../api/fetchJson.ts";
import type { Book, Page } from "../api/types.ts";

type BookListProps = {
  authorId: string | null;
};

export function BookList({ authorId }: BookListProps) {
  const books = useQuery({
    queryKey: ["books", { authorId }],
    queryFn: ({ signal }) => {
      const url = authorId
        ? `/api/books?authorId=${authorId}&sort=year,desc`
        : "/api/books?sort=year,desc";
      return fetchJson<Page<Book>>(url, signal);
    },
  });

  if (books.fetchStatus === "fetching") {
    return <p>Loading books...</p>;
  }
  if (books.fetchStatus === "paused") {
    return <p>Waiting for the network...</p>;
  }
  if (books.status === "error") {
    return (
      <p>
        Could not load books: {books.error.message}{" "}
        <button onClick={() => books.refetch()}>Try again</button>
      </p>
    );
  }
  if (books.status === "pending") {
    return null;
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
