import { Link, useNavigate } from "react-router-dom";
import chefLogo from "../assets/chef-logo.png";

export default function Header() {
  const navigate = useNavigate();
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
      <div>
        <Link to="/random-meal" className="font-bold">
          Random Meal
        </Link>
      </div>
    </div>
  );
}
