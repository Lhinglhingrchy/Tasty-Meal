import axios from "axios";
import type { MealResponse } from "../type/meal";

const popularMeal = [
  "Lasagne",
  "Pad Thai",
  "Pistachio cake",
  "Spanish Tortilla",
  "Paella",
  "Cheese Borek",
  "Bread omelette",
  "Thai Green Curry",
];

export async function getPopularMeal() {
  const promises = popularMeal.map(async (name) => {
    const res = await axios.get<MealResponse>(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const meals = res.data.meals;
    if (!meals) return null; // ถ้าไม่เจอเมนู
    const meal = meals[0]; // เลือกตัวแรก
    return meal;
  });
  const data = await Promise.all(promises);
  return data;
}
