import { useLoaderData, Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import type { HomeLoaderResult } from "./homeLoader";

export default function HomePage() {
  const { popularMeal } = useLoaderData<HomeLoaderResult>();

  const renderPopulatMeal = popularMeal.map((meal) => {
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
        <div className="font-bold text-lg text-center md:text-xl">
          {meal.strMeal}
        </div>
        <p className="font-medium md:text-xl">
          {meal.strCategory} · {meal.strArea}
        </p>
        <div className="mt-2">
          <Link
            to={`/meal/${meal.strMeal}`}
            className="border-[3px] border-[#FFD6BA] bg-[#FFF2EB] p-1 px-3 rounded-lg font-medium md:text-xl"
          >
            View Detail
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col">
      <SearchInput />
      <div className="p-2 flex flex-col gap-3 mt-5">
        <h1 className="text-center font-bold text-lg md:text-2xl lg:text-3xl">
          Popular Meals
        </h1>
        <div className="flex flex-col items-center gap-3 flex-wrap md:flex-row md:justify-center md:gap-6 md:py-5 lg:gap-3 xl:gap-6">
          {renderPopulatMeal}
        </div>
      </div>
    </div>
  );
}
