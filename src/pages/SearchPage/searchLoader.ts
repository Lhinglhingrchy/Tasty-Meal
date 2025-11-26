import { searchMeals } from "../../api/queries/searchMeals";
import type { Meal } from "../../api/type/meal";

// interface ที่เชื่อมระหว่าง searchLoader กับ useLoaderData
export interface SearchLoaderResult {
  searchResults: Meal[];
}

export async function searchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("meal");
  if (!term) {
    throw Error("Please enter a meal to search");
  }
  const result = await searchMeals(term);
  console.log(result);

  return { searchResults: result };
}
