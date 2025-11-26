import SearchInput from "../../components/SearchInput";
import { useLoaderData } from "react-router-dom";
import type { SearchLoaderResult } from "./searchLoader";
import MealListItem from "../../components/MealListItem";

export default function SearchPage() {
  const { searchResults } = useLoaderData() as SearchLoaderResult;

  const renderMeal = searchResults.map((result) => {
    return <MealListItem meal={result} key={result.name} />;
  });
  return (
    <div>
      <SearchInput />
      <div>
        <h1>Result</h1>
        <div>{renderMeal}</div>
      </div>
    </div>
  );
}
