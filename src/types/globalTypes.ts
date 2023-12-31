export interface IReviews {
  id: number | string;
  user: string;
  rating: number;
  comment: string;
}

export interface IBooks {
  [x: string]: unknown;
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publication_date: string;
  description?: string;
  image?: string;
  reviews?: IReviews[] | { averageRating: number; numberOfReviews: number };

  avatar?: string;
}

export interface IErrorResponse {
  message?: unknown;
  status?: number;
  error?: string;
}
