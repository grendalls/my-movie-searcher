import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { IMovie } from '../models/movie';

class TmdbService {
  private API_KEY: string = 'cd4a5fa4bc9b6ae5833e11e6b27a7af6';

  private client = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 3000,
    params: {
      api_key: this.API_KEY,
      language: 'ru',
    },
  });
  private getData = async (url: string, config: AxiosRequestConfig) => {
    try {
      const response: AxiosResponse = await this.client.get(url, config);
      if (response.status !== 200) {
        throw new Error(`Could not get ${url}, ${response.status} error`);
      }
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };

  getPopularMovies = async (page?: number) => {
    return this.getData('movie/popular', {
      params: {
        page,
      },
    });
  };

  searchMovies = async (query: string, page?: number) => {
    return this.getData('/search/movie', {
      params: {
        page,
        query: encodeURI(query),
      },
    });
  };
  getMovieDetails = async (id: number): Promise<AxiosResponse<IMovie>> => {
    return this.getData(`movie/${id}`, {
      params: {
        append_to_response: 'similar,recommendations',
      },
    });
  };
}

export default new TmdbService();
