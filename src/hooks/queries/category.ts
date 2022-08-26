import { CategoryService } from './../../services/category';

import { useQuery } from 'react-query'

const getCategories = async () => {
  const response = await CategoryService.list()
  return response.data
}

export function useQueryCategories() {
  return useQuery('queryCategories', () => getCategories()) 
}
