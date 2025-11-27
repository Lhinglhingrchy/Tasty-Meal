import type { Meal } from "../api/type/meal";
import { Link } from "react-router-dom";

// interface บอกว่า meal มี type เดียวกับ interface Meal
interface MealListItemProp {
  meal: Meal;
}
// รับ props ข้อมูลการค้นหามาจาก searchPage
function MealListItem({ meal }: MealListItemProp) {
  return (
    <div>
      <div>
        <img src={meal.strMealThumb} />
      </div>
      <div>{meal.strMeal}</div>
      <p>
        {meal.strCategory} · {meal.strArea}
      </p>
      <div>
        <Link to={`/meal/${meal.strMeal}`} className="border">
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default MealListItem;
