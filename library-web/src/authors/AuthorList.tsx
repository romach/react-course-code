import type { Author, Page } from "../api/types.ts";
import { useFetch } from "../api/useFetch.ts";

export function AuthorList() {
  const authors = useFetch<Page<Author>>("/api/authors");

  if (authors.status === "loading") {
    return <p>Loading authors...</p>;
  }
  if (authors.status === "error") {
    return <p>Could not load authors: {authors.error.message}</p>;
  }

  const { content, page } = authors.data;

  return (
    <>
      <p>
        Showing {content.length} of {page.totalElements} authors
      </p>
      <ul>
        {content.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </>
  );
}
