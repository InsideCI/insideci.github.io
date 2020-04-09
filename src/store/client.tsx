import axios from 'axios';
import { Params, GenericApi } from './types/configs';
import { API_ADDRESS, API_PORT } from '../config';

export function NewGenericAPI<T>(resource: string): GenericApi<T> {
  const API = axios.create({
    baseURL: API_ADDRESS + API_PORT,
  });

  return {
    list: (params: Params) => API.get<T>(`/${resource}`, { params }),
    get: (id: number) => API.get<T>(`/${resource}/${id}`),
    delete: (id: number) => API.delete<T>(`/${resource}/${id}`),
    post: (model: T) => API.post<T>(`/${resource}`, { model }),
    put: (id: number, model: T) => API.put<T>(`/${resource}/${id}`, { model }),
  };
}
