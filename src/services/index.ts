import axios, { AxiosInstance, AxiosResponse } from 'axios';

export default class {
  private API_KEY: string = 'cd4a5fa4bc9b6ae5833e11e6b27a7af6';

  private client: AxiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 3000,
    params: {
      api_key: this.API_KEY,
      language: 'ru'
    }
  });

  getPopularMovies = async (page: number) => {
    try {
      const res: AxiosResponse = await this.client.get('movie/popular', {
        params: {
          page: page
        }
      });

      return res;
    } catch (error) {
      console.log(error);
    }
  };
  getMovieByName = (name: string ) => {

  }
}
