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
    <div className="w-full flex flex-col items-center gap-2.5 p-3 pt-8 bg-[#FFF4E6] md:gap-3.5 md:py-10 lg:py-11 lg:gap-4.5">
      <div className="font-bold text-lg md:text-2xl lg:text-3xl">
        Cooking is a taste of happiness.
      </div>
      <div className="font-medium text-center md:text-xl">
        Find out a variety of simple recipes that are delicious.
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            className="border-[3px] border-[#FFD6BA] bg-[#FFF2EB] rounded p-1 hover:border-[#FFD6BA] focus:border-[#FFD6BA] focus:outline-none md:text-lg md:px-2"
            placeholder="Search for a Meal..."
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
          <button
            className="border-[3px] border-[#FFD6BA] bg-[#FFF2EB] rounded p-2 font-bold cursor-pointer md:text-lg"
            type="submit"
          >
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
