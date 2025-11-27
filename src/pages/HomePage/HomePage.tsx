import { useLoaderData, Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import type { HomeLoaderResult } from "./homeLoader";

export default function HomePage() {
  const { popularMeal } = useLoaderData<HomeLoaderResult>();

  const renderPopulatMeal = popularMeal.map((meal) => {
    return (
      <div key={meal.strMeal}>
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
  });

  return (
    <div>
      <SearchInput />
      <div>
        <h1>Popular</h1>
      </div>
      <div>{renderPopulatMeal}</div>
    </div>
  );
}
