import { Link } from "react-router-dom";
import { isFavorite, toggleFavorite } from "../utils/favorites";
import { useState } from "react";

function RecipeCard({ recipe }) {
  const [favorite, setFavorite] = useState(isFavorite(recipe.idMeal));

  function handleFavorite(e) {
    e.preventDefault(); // prevent navigation
    toggleFavorite(recipe.idMeal);
    setFavorite(!favorite);
  }

  return (
    <Link to={`/recipe/${recipe.idMeal}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          backgroundColor: "#F4ECE7",
          padding: "16px",
          borderRadius: "8px",
          color: "#000",
          position: "relative",
        }}
      >
        <button
          onClick={handleFavorite}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          {favorite ? "❤️" : "🤍"}
        </button>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          style={{ width: "100%", borderRadius: "6px" }}
        />

        <h3>{recipe.strMeal}</h3>
        <p>{recipe.strArea}</p>
      </div>
    </Link>
  );
}

export default RecipeCard;
