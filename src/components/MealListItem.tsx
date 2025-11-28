import type { Meal } from "../api/type/meal";
import { Link } from "react-router-dom";

// interface บอกว่า meal มี type เดียวกับ interface Meal
interface MealListItemProp {
  meal: Meal;
}
// รับ props ข้อมูลการค้นหามาจาก searchPage
function MealListItem({ meal }: MealListItemProp) {
  return (
    <div
      key={meal.strMeal}
      className="w-[300px] border-5 border-[#FFD6BA] bg-[#FFE8CD] p-4 rounded flex flex-col items-center gap-2 md:w-[320px]"
    >
      <div className="flex justify-center">
        <img src={meal.strMealThumb} className="rounded w-[90%]" />
      </div>
      <div className="font-bold text-lg text-center md:text-xl">
        {meal.strMeal}
      </div>
      <p className="font-medium md:text-xl">
        {meal.strCategory} · {meal.strArea}
      </p>
      <div className="mt-2">
        <div>Add fav</div>
        <Link
          to={`/meal/${meal.strMeal}`}
          className="border-3 border-[#FFD6BA] bg-[#FFF2EB] p-1 rounded font-medium md:text-xl"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default MealListItem;
