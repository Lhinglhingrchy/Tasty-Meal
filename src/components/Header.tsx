import { useNavigate } from "react-router-dom";
import chefLogo from "../assets/chef-logo.png";
import { getRandomMeal } from "../api/queries/getRandomMeal";

export default function Header() {
  const navigate = useNavigate();

  const handleClickRandomMeal = async () => {
    const random = await getRandomMeal();
    const meal = random[0];
    navigate(`/meal/${meal.strMeal}`);
  };

  const handleClickBookmark = () => {
    navigate("/bookmark");
  };

  return (
    <div className="w-full flex justify-between items-center p-3 bg-[#FFE8CD] md:p-4">
      <div
        className="flex items-center gap-2 cursor-pointer md:ml-2 lg:ml-5"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={chefLogo} alt="logo" className="w-[65px] md:w-[75px]" />
        <div className="font-extrabold text-xl md:text-2xl">TastyMeal</div>
      </div>
      <div
        className="cursor-pointer font-extrabold text-lg md:text-2xl md:mr-2 lg:mr-5"
        onClick={handleClickBookmark}
      >
        BookMark
      </div>
      <div
        className="cursor-pointer font-extrabold text-lg md:text-2xl md:mr-2 lg:mr-5"
        onClick={handleClickRandomMeal}
      >
        Random Meal
      </div>
    </div>
  );
}
