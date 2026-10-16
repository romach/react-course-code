import { useEffect, useState } from "react";

export type FetchState<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: Error };

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({ status: "loading" });
  const [stateUrl, setStateUrl] = useState(url);

  if (url !== stateUrl) {
    setStateUrl(url);
    setState({ status: "loading" });
  }

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: T) => setState({ status: "success", data }))
      .catch((error: Error) => {
        if (!controller.signal.aborted) {
          setState({ status: "error", error });
        }
      });
    return () => controller.abort();
  }, [url]);

  return state;
}
