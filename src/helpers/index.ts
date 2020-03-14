const baseImageUrl = 'http://image.tmdb.org/t/p/';

export const getImageUrl = (posterUrl: string) => 
`${baseImageUrl}w500${posterUrl}`;