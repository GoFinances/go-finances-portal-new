import { httpClient } from './config';

import { ICategory } from '../domain/models/category/category';


export const CategoryService = {
    list: () => {
        return httpClient.request<ICategory[]>({
            url: `/categories`,
            method: 'get'
        })
    }
}
  