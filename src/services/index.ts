import {baseUrl} from '../constants/baseUrl';
import {apikey} from '../constants/apikey';
import {api} from './api';

// endpoints
const trendingMovies = `${baseUrl}/trending/movie/day?api_key=${apikey}&language=pt-BR'`;
const upcomingMovies = `${baseUrl}/movie/upcoming?api_key=${apikey}&language=pt-BR'`;
const topRatedMovies = `${baseUrl}/movie/top_rated?api_key=${apikey}&language=pt-BR'`;

// dynamic endpoints
const movieDetails = (id: number) =>
  `${baseUrl}/movie/${id}?api_key=${apikey}&language=pt-BR'`;

const movieCredits = (id: number) =>
  `${baseUrl}/movie/${id}/credits?api_key=${apikey}&language=pt-BR'`;

const simularMovies = (id: number) =>
  `${baseUrl}/movie/${id}/similar?api_key=${apikey}&language=pt-BR'`;

// returns
export const fetchTrendingMovies = () => {
  return api(trendingMovies);
};

export const fetchUpcomingMovies = () => {
  return api(upcomingMovies);
};

export const fetchTopRatedMovies = () => {
  return api(topRatedMovies);
};

// dynamic
export const fetchMovieDetails = (id: number) => {
  return api(movieDetails(id));
};

export const fetchMovieCredits = (id: number) => {
  return api(movieCredits(id));
};

export const fetchMovieSimular = (id: number) => {
  return api(simularMovies(id));
};
