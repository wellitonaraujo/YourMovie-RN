export interface CastMember {
  character: string;
  original_name: string;
  profile_path: string | null;
}
export interface CastProps {
  cast: CastMember[];
  navigation: any;
}

export interface MovieProps {
  id: number;
  title: string;
  poster_path: string | null;
  status: string;
  release_date: string | null;
  runtime: number;
  genres: {name: string}[];
  overview: string;
}
