import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  if (favorites.length === 0) {
    return (
      <div
        className="min-h-screen flex items-center justify-center text-white"
        style={{ backgroundColor: "#023535" }}
      >
        No favorite recipes yet.
      </div>
    );
  }

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{ backgroundColor: "#023535" }}
    >
      <h1 className="text-3xl font-bold mb-8 text-white text-center">
        My Favorites
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
