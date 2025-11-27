import { useNavigate } from "react-router-dom";
import chefLogo from "../assets/chef-logo.png";
import { getRandomMeal } from "../api/queries/getRandomMeal";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = async () => {
    const random = await getRandomMeal();
    const meal = random[0];
    navigate(`/meal/${meal.strMeal}`);
  };

  return (
    <div className="w-full flex justify-between items-center p-3 bg-[#FFE8CD]">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={chefLogo} alt="logo" className="w-[65px]" />
        <div className="font-bold">TastyMeal</div>
      </div>
      <div className="cursor-pointer" onClick={handleClick}>
        Random Meal
      </div>
    </div>
  );
}
