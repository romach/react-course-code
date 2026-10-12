import { useEffect, useState } from "react";
import type { Author, Page } from "../api/types.ts";

export function AuthorList() {
  const [page, setPage] = useState<Page<Author> | null>(null);

  useEffect(() => {
    fetch("/api/authors")
      .then((response) => response.json())
      .then(setPage);
  }, []);

  const authors = page?.content ?? [];
  const total = page?.page.totalElements ?? 0;

  return (
    <>
      <p>
        Showing {authors.length} of {total} authors
      </p>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </>
  );
}
