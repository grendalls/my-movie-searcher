export interface IRequest<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: Date;
    minimum: Date;
  };
}
