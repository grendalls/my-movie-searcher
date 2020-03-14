export interface IGenre {
  id: number;
  name: string;
}

export interface IFilm {
  id: number;
  title: string;
  overview: string;
  genre_ids: number[];
  poster_path: string;
}

export interface IFilmCard {}
