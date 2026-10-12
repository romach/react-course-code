export type Author = {
  id: string;
  name: string;
};

export type Book = {
  id: string;
  title: string;
  year: number;
  authors: Author[];
};

export type Page<T> = {
  content: T[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
};
