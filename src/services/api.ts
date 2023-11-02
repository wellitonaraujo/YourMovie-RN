import axios from 'axios';
import {apikey} from '../constants/apikey';
import {tokenApi} from '../constants/token';

const baseUrl = 'https://api.themoviedb.org/3';

const trendingMovies = `${baseUrl}/trending/movie/day?api_key=${apikey}'`;
const upcomingMovies = `${baseUrl}/movie/upcoming?api_key=${apikey}'`;
const topRatedMovies = `${baseUrl}/movie/top_rated?api_key=${apikey}'`;

interface ApiOptions {
  method: string;
  url: string;
  params: Record<string, any>;
  headers: {};
}
export const image500 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w500/${path}` : null;

export const image342 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w342/${path}` : null;

export const image185 = (path: string) =>
  path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

const api = async (endpoint: string, params?: any): Promise<any> => {
  const options: ApiOptions = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${tokenApi}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('Errou aqui bb', error);
    return;
  }
};

export const fetchTrendingMovies = () => {
  return api(trendingMovies);
};

export const fetchUpcomingMovies = () => {
  return api(upcomingMovies);
};

export const fetchTopRatedMovies = () => {
  return api(topRatedMovies);
};
