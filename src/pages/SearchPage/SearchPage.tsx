import SearchInput from "../../components/SearchInput";
import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import MealListItem from "../../components/MealListItem";

export default function SearchPage() {
  const { searchResults, term } = useLoaderData<SearchLoaderResult>();

  const renderMeal = searchResults.map((result) => {
    return <MealListItem meal={result} key={result.strMeal} />;
  });
  return (
    <div className="flex flex-col">
      <SearchInput />
      <div className="p-2 flex flex-col gap-3 mt-5">
        <h1 className="text-center font-bold text-lg md:text-2xl lg:text-3xl">
          Result for: <span className="italic">{term}</span>
        </h1>
        <div className="flex flex-col items-center gap-3 flex-wrap md:flex-row md:justify-center md:gap-6 md:py-5">
          {renderMeal}
        </div>
      </div>
    </div>
  );
}
