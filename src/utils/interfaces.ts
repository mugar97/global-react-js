export interface Movie {
  id: string;
  name: string;
  imageUrl: string;
  releaseYear: string;
  genres: string[];
  raiting: number;
  description: string;
  length: number | string;
}
