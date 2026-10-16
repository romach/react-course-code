import type { Author, Page } from "../api/types.ts";
import { useFetch } from "../api/useFetch.ts";

type AuthorFilterProps = {
  value: string | null;
  onChange: (authorId: string | null) => void;
};

export function AuthorFilter({ value, onChange }: AuthorFilterProps) {
  const authors = useFetch<Page<Author>>("/api/authors");

  const options = authors.status === "success" ? authors.data.content : [];

  return (
    <label>
      Author{" "}
      <select
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value || null)}
      >
        <option value="">All authors</option>
        {options.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </select>
    </label>
  );
}
