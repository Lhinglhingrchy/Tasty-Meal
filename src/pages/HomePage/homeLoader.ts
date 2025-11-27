import { getPopularMeal } from "../../api/queries/getPopularMeal";
import type { Meal } from "../../api/type/meal";

export interface HomeLoaderResult {
  popularMeal: Meal[];
}

export async function HomeLoader() {
  const popularMeal = await getPopularMeal();
  return { popularMeal };
}
