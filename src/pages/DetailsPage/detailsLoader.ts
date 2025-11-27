import { searchMeals } from "../../api/queries/searchMeals";
import type { Params } from "react-router-dom";
import type { Meal } from "../../api/type/meal";

export interface DetailsLoaderResult {
  details: Meal;
}

export async function DetailsLoader({ params }: { params: Params }) {
  const { name } = params;
  if (!name) {
    throw new Error("Name must be provided");
  }
  const details = await searchMeals(name);
  if (!details || details.length === 0) {
    throw new Error("Meal not found");
  }
  return { details: details[0] };
}
