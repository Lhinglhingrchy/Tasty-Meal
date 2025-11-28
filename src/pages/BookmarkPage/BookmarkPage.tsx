import MealListItem from "../../components/MealListItem";
import type { Meal } from "../../api/type/meal";
import { useEffect, useState } from "react";

export default function BookmarkPage() {
  const [bookmarkList, setBookmarkList] = useState<Meal[]>([]);

  const getBookmarkFromLocalStorage = () => {
    const loadBookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
    setBookmarkList(loadBookmark);
  };

  useEffect(() => {
    getBookmarkFromLocalStorage();
  }, []);

  return (
    <div className="flex flex-col mt-10 gap-3">
      <h1 className="text-center font-bold text-lg md:text-2xl lg:text-3xl">
        Your Bookmark
      </h1>
      <div className="flex flex-col items-center gap-3 flex-wrap md:flex-row md:justify-center md:gap-6 md:py-5 lg:gap-3 xl:gap-6">
        {bookmarkList.length === 0 ? (
          <div className="font-medium mt-4 md:text-xl">No Bookmark</div>
        ) : (
          bookmarkList.map((meal) => (
            <MealListItem
              key={meal.idMeal}
              meal={meal}
              onToggleBookmark={getBookmarkFromLocalStorage}
            />
          ))
        )}
      </div>
    </div>
  );
}
