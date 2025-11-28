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
          className="rounded-xl w-[90%] border-[3px] border-[#B17F59]"
        />
      </div>
      <div className="font-bold text-lg text-center line-clamp-1 md:text-xl">
        {meal.strMeal}
      </div>
      <p className="font-medium md:text-xl">
        {meal.strCategory} · {meal.strArea}
      </p>
      <div className="mt-2 flex items-center justify-evenly w-full">
        <Link
          to={`/meal/${meal.strMeal}`}
          className="block border-[3px] border-[#FFD6BA] bg-[#FFF2EB] p-1 px-3 rounded-lg font-medium md:text-xl"
        >
          View Detail
        </Link>
        <div className="flex justify-center border-[3px] border-[#FFD6BA] bg-[#FFF2EB] rounded-lg p-1">
          <button onClick={toggleBookmark} className="cursor-pointer">
            {isBookmark ? (
              <FaBookmark className="text-2xl" />
            ) : (
              <FaRegBookmark className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealListItem;
