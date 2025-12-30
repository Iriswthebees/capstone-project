import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105"
      style={{ backgroundColor: "#F4ECE7" }}
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 text-black">
        <h3 className="font-semibold text-lg mb-1">
          {recipe.strMeal}
        </h3>

        <p className="text-sm">
          <span className="font-medium">Cuisine:</span>{" "}
          {recipe.strArea || "Unknown"}
        </p>

        <p className="text-sm">
          <span className="font-medium">Category:</span>{" "}
          {recipe.strCategory || "Unknown"}
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
