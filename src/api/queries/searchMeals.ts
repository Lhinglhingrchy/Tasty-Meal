import axios from "axios";
import type { Meal } from "../type/meal";

interface SearchResponse {
  meals: {
    strMeal: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
  }[];
}

export async function searchMeals(name: string): Promise<Meal[]> {
  const res = await axios.get<SearchResponse>(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
  );
  return res.data.meals.map((meal) => {
    return {
      name: meal.strMeal,
      picture: meal.strMealThumb,
      category: meal.strCategory,
      cuisine: meal.strArea,
    };
  });
}
