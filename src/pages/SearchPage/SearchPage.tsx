import SearchInput from "../../components/SearchInput";
import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import MealListItem from "../../components/MealListItem";

export default function SearchPage() {
  const { searchResults, term } = useLoaderData() as SearchLoaderResult;

  const renderMeal = searchResults.map((result) => {
    return <MealListItem meal={result} key={result.strMeal} />;
  });
  return (
    <div>
      <SearchInput />
      <div>
        <h1>Result of {term}</h1>
        <div>{renderMeal}</div>
      </div>
    </div>
  );
}
