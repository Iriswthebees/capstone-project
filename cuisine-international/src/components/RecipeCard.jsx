import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = stored.some((item) => item.idMeal === recipe.idMeal);
    setIsFavorite(exists);
  }, [recipe.idMeal]);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent card navigation

    const stored = JSON.parse(localStorage.getItem("favorites")) || [];

    if (isFavorite) {
      const updated = stored.filter(
        (item) => item.idMeal !== recipe.idMeal
      );
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      stored.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(stored));
      setIsFavorite(true);
    }
  };

  return (
    <div
      onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
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
          <strong>Cuisine:</strong> {recipe.strArea || "Unknown"}
        </p>

        <p className="text-sm mb-3">
          <strong>Category:</strong> {recipe.strCategory || "Unknown"}
        </p>

        <button
          onClick={toggleFavorite}
          className="px-3 py-1 rounded-md text-sm font-medium"
          style={{
            backgroundColor: "#F4511E",
            color: "#F4ECE7",
          }}
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
