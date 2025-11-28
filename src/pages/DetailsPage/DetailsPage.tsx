import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";
import type { Meal } from "../../api/type/meal";

export default function DetailsPage() {
  const { details } = useLoaderData<DetailsLoaderResult>();

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    const loadBookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
    if (isBookmarked) {
      const updated = loadBookmark.filter((item: Meal) => {
        item.idMeal !== details.idMeal;
      });
      localStorage.setItem("bookmark", JSON.stringify(updated));
      setIsBookmarked(false);
    } else {
      loadBookmark.push(details);
      localStorage.setItem("bookmark", JSON.stringify(loadBookmark));
      setIsBookmarked(true);
    }
  };

  useEffect(() => {
    const loadBookmark = JSON.parse(localStorage.getItem("bookmark") || "[]");
    const findBookmark = loadBookmark.some(
      (item: Meal) => item.idMeal === details.idMeal
    );
    setIsBookmarked(findBookmark);
  }, [details.idMeal]);

  return (
    <div className="flex flex-col px-6 py-6 gap-3 md:items-center">
      <div className="flex justify-center gap-2 md:mt-2 md:gap-3 lg:gap-4">
        <h1 className="text-center font-bold text-lg md:text-2xl lg:text-3xl">
          {details.strMeal}
        </h1>
        <div className="flex justify-center">
          <button onClick={toggleBookmark} className="cursor-pointer">
            {isBookmarked ? (
              <FaBookmark className="text-xl md:text-2xl" />
            ) : (
              <FaRegBookmark className="text-xl md:text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={details.strMealThumb}
          alt={details.strMeal}
          className="rounded-xl w-[80%] md:w-[350px]"
        />
      </div>
      <div className="flex flex-col mt-4 md:w-[600px] lg:w-[80%]">
        <h2 className="font-bold mb-3 text-[17px] w-full border-b pb-2 md:text-xl">
          Ingredients
        </h2>
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient =
            details[`strIngredient${i + 1}` as keyof typeof details];
          const measure = details[`strMeasure${i + 1}` as keyof typeof details];
          // skip ถ้า ingredient ว่าง
          if (!ingredient || ingredient.trim() === "") return null;

          return (
            <div key={i} className="flex gap-4 justify-around">
              <div className="w-[150px] mb-2 font-medium md:w-[40%] md:text-lg xl:w-[35%]">
                {measure}
              </div>
              <div className="w-[150px] mb-2 font-medium md:w-[40%] md:text-lg">
                {ingredient}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col mt-3 md:w-[600px] lg:w-[80%]">
        <h2 className="font-bold mb-3 md:text-xl w-full border-b pb-2 text-[17px]">
          Method
        </h2>
        <div>
          {details.strInstructions
            .split("\r\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <p key={index} className="mx-2 mb-2 md:text-lg">
                · {line.trim()}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
