import { useLoaderData, Link } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import type { HomeLoaderResult } from "./homeLoader";

export default function HomePage() {
  const { popularMeal } = useLoaderData() as HomeLoaderResult;

  const renderPopulatMeal = popularMeal.map((m) => {
    return (
      <div key={m.name}>
        <div>
          <img src={m.picture} />
        </div>
        <div>{m.name}</div>
        <p>
          {m.category} · {m.cuisine}
        </p>
        <div>
          <Link to={`/meal/${m.name}`} className="border">
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
