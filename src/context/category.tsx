import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import * as Icons from "react-icons/fa";

import { ICategory } from "../domain/models/category/category";
import { IOption } from "../domain/models/option";

import { useQueryCategories } from "../hooks/queries/category";

interface ICategoryProvider {
  children: ReactNode;
}

export interface ICategoryContext {
  categories: ICategory[];
  getCategoriesOption: () => IOption[];
}

const CategoryContext = createContext<ICategoryContext>({} as ICategoryContext);

const CategoryProvider = ({ children }: ICategoryProvider) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const categoryQuery = useQueryCategories();

  useEffect(() => {
    if (categoryQuery.data) {
      setCategories(
        categoryQuery.data.result.map((category) => {
          const [, iconName] = category.icon.split("/");
          const Icon = (Icons as any)[iconName];

          return { ...category, icon: Icon };
        })
      );
    }
  }, [categoryQuery.data]);

  const getCategoriesOption = useCallback(() => {
    return categories.map(({ title, id, icon }) => {
      return { id, description: title, icon };
    });
  }, [categories]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategoriesOption,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
