import axios from "axios";
import type { MealResponse } from "../type/meal";

export async function getRandomMeal() {
  const res = await axios.get<MealResponse>(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  return res.data.meals;
}
