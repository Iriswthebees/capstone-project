import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipe/${recipe.idMeal}`}>
      <div
        className="rounded-xl shadow-md p-4 cursor-pointer hover:scale-105 transition"
        style={{ backgroundColor: "#F4ECE7" }} // button box color
      >
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-lg mb-3"
        />

        <h3 className="font-semibold text-lg text-black">
          {recipe.strMeal}
        </h3>

        <p className="text-sm text-gray-600">
          {recipe.strArea} • {recipe.strCategory}
        </p>
      </div>
    </Link>
  );
}

export default RecipeCard;
