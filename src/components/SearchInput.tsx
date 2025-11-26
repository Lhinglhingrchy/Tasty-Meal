import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?meal=${term}`);
  };
  return (
    <div className="bg-yellow-300">
      <div>Cooking is a taste of happiness.</div>
      <div>Find out a variety of simple recipes that are delicious.</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="border rounded"
            placeholder="Search for a Meal..."
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button className="border" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchInput;
{
}
