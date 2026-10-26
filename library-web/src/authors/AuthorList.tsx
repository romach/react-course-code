import { useAuthors } from "./useAuthors.ts";

export function AuthorList() {
  const authors = useAuthors();

  if (authors.fetchStatus === "fetching") {
    return <p>Loading authors...</p>;
  }
  if (authors.fetchStatus === "paused") {
    return <p>Waiting for the network...</p>;
  }
  if (authors.status === "error") {
    return (
      <p>
        Could not load authors: {authors.error.message}{" "}
        <button onClick={() => authors.refetch()}>Try again</button>
      </p>
    );
  }
  if (authors.status === "pending") {
    return null;
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
