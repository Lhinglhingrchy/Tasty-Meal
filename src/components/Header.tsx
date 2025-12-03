import { useNavigate } from "react-router-dom";
import chefLogo from "../assets/chef-logo.png";
import { getRandomMeal } from "../api/queries/getRandomMeal";
import { FaBookBookmark } from "react-icons/fa6";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

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
        className="flex items-center gap-2 cursor-pointer ml-2 md:ml-2 lg:ml-5"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={chefLogo} alt="logo" className="w-[65px] md:w-[75px]" />
        <div className="font-extrabold hidden md:text-2xl md:block">
          TastyMeal
        </div>
      </div>
      <div className="hidden lg:flex lg:gap-6 lg:mr-2">
        <div
          className="cursor-pointer font-extrabold text-lg md:text-2xl"
          onClick={handleClickBookmark}
        >
          Bookmark
        </div>
        <div
          className="cursor-pointer font-extrabold text-lg md:text-2xl"
          onClick={handleClickRandomMeal}
        >
          Random Meal
        </div>
      </div>
      <div className="flex gap-2 mr-2 lg:hidden">
        <button onClick={handleClickBookmark}>
          <FaBookBookmark className="text-3xl" />
        </button>
        <button onClick={handleClickRandomMeal}>
          <GiPerspectiveDiceSixFacesRandom className="text-4xl" />
        </button>
      </div>
    </div>
  );
}
