import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { IFilm } from '../models';

interface IResponse {
  page: number;
  total_results: number;
  results: IFilm[];
}

class TmdbService {
  private API_KEY: string = 'cd4a5fa4bc9b6ae5833e11e6b27a7af6';

  private client: AxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 3000,
    params: {
      api_key: this.API_KEY,
      language: 'ru'
    }
  });

  getPopularMovies = async (page?: number) => {
    try {
      const res: AxiosResponse = await this.client.get('movie/popular', {
        params: {
          page
        }
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  };

  searchMovies = async (query: string, page?: number) => {
    try {
      const res: AxiosResponse<IResponse> = await this.client.get(
        '/search/movie',
        {
          params: {
            page,
            query: encodeURI(query)
          }
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  getMovieDetail = async (id: number) => {
    try {
      const res = await this.client.get(`movie/${id}`, {
        params: {
          append_to_response: 'similar,recommendations'
        }
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };
}

export default new TmdbService();
