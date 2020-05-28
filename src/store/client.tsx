import { API_ADDRESS, API_PORT } from '../config';
import { GenericResource, Params } from './types/configs';

import axios from 'axios';

/**
 * Returns a set of basic endpoint generic functions based on desired type.
 * @param resource Endpoint resource string.
 */
export function NewGenericClient<T>(resource: string): GenericResource<T> {
  const axiosClient = axios.create({
    baseURL: API_ADDRESS + API_PORT,
  });

  const resourceStr = resource[0] === '/' ? resource.substr(1) : resource;

  return {
    list: (params: Params) =>
      axiosClient.get<T>(`/${resourceStr}`, {
        params,
      }),
    get: (id: number) => axiosClient.get<T>(`/${resourceStr}/${id}`),
    delete: (id: number) => axiosClient.delete<T>(`/${resourceStr}/${id}`),
    post: (model: T) => axiosClient.post<T>(`/${resourceStr}`, model),
    put: (id: number, model: T) =>
      axiosClient.put<T>(`/${resourceStr}/${id}`, model),
  };
}
