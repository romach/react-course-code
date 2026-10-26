import { useQuery } from "@tanstack/react-query";
import { fetchJson } from "../api/fetchJson.ts";
import type { Author, Page } from "../api/types.ts";

export function useAuthors() {
  return useQuery({
    queryKey: ["authors"],
    queryFn: ({ signal }) => fetchJson<Page<Author>>("/api/authors", signal),
  });
}
