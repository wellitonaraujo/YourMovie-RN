interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  status: string;
  release_date: string | null;
  runtime: number;
  genres: {name: string}[];
  overview: string;
}

export interface TrendingMoviesProps {
  data: Movie[];
}
