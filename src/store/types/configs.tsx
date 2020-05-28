import { AxiosResponse } from 'axios';

export interface Params {
  page?: number;
  limit?: number;
  order?: Array<string>;
}

export interface GenericResource<T> {
  list: (params: Params) => Promise<AxiosResponse<T>>;
  get: (id: number) => Promise<AxiosResponse<T>>;
  delete: (id: number) => Promise<AxiosResponse<T>>;
  post: (model: T) => Promise<AxiosResponse<T>>;
  put: (id: number, model: T) => Promise<AxiosResponse<T>>;
}
