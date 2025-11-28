import type { Meal } from "../api/type/meal";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";

// interface บอกว่า meal มี type เดียวกับ interface Meal
interface MealListItemProp {
  meal: Meal;
  onToggleBookmark?: () => void;
}
// รับ props ข้อมูลการค้นหามาจาก searchPage
function MealListItem({ meal, onToggleBookmark }: MealListItemProp) {
  // ใช้ toggle ปุ่ม bookmark
  const [isBookmark, setIsBookmark] = useState(false);

  const loadLocalStorage = () => {
    const loadBookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
    const checkBookmark = loadBookmark.some(
      (item: Meal) => item.idMeal === meal.idMeal
    );
    setIsBookmark(checkBookmark);
  };

  useEffect(() => {
    loadLocalStorage();
  }, [meal.idMeal]);

  const toggleBookmark = () => {
    const loadBookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
    if (isBookmark) {
      const updatedBookmark = loadBookmark.filter(
        (item: Meal) => item.idMeal !== meal.idMeal
      );
      localStorage.setItem("bookmark", JSON.stringify(updatedBookmark));
      setIsBookmark(false);
    } else {
      loadBookmark.push(meal);
      localStorage.setItem("bookmark", JSON.stringify(loadBookmark));
      setIsBookmark(true);
    }
    if (onToggleBookmark) onToggleBookmark();
  };

  return (
    <div
      key={meal.idMeal}
      className="w-[300px] border-5 border-[#FFD6BA] bg-[#FFE8CD] p-4 rounded-xl flex flex-col items-center gap-2 md:w-[320px]"
    >
      <div className="flex justify-center">
        <img
          src={meal.strMealThumb}
          className="rounded-xl w-[90%] border-3 border-[#B17F59]"
        />
      </div>
      <div className="font-bold text-lg text-center md:text-xl">
        {meal.strMeal}
      </div>
      <p className="font-medium md:text-xl">
        {meal.strCategory} · {meal.strArea}
      </p>
      <div className="mt-2">
        <button onClick={toggleBookmark}>
          {isBookmark ? <FaBookmark /> : <FaRegBookmark />}
        </button>
        <Link
          to={`/meal/${meal.strMeal}`}
          className="border-3 border-[#FFD6BA] bg-[#FFF2EB] p-1 rounded-lg font-medium md:text-xl"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}

export default MealListItem;
