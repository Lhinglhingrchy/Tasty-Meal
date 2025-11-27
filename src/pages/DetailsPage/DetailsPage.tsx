import { useLoaderData } from "react-router-dom";
import type { DetailsLoaderResult } from "./detailsLoader";

export default function DetailsPage() {
  const { details } = useLoaderData<DetailsLoaderResult>();

  return (
    <div>
      <h1>{details.strMeal}</h1>
      <div>
        <img src={details.strMealThumb} alt={details.strMeal} />
      </div>
      <div>
        <h2>Ingredients</h2>
        {Array.from({ length: 20 }, (_, i) => {
          const ingredient =
            details[`strIngredient${i + 1}` as keyof typeof details];
          const measure = details[`strMeasure${i + 1}` as keyof typeof details];
          // skip ถ้า ingredient ว่าง
          if (!ingredient || ingredient.trim() === "") return null;

          return (
            <div key={i}>
              <div>{measure}</div>
              <div>{ingredient}</div>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Method</h2>
        <div>
          {details.strInstructions
            .split("\r\n")
            .filter((line) => line.trim() !== "")
            .map((line, index) => (
              <p key={index}>{line}</p>
            ))}
        </div>
      </div>
    </div>
  );
}
