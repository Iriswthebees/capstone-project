import { useEffect, useState } from "react";
import { getFavorites } from "../utils/favorites";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchFavorites() {
      const favoriteIds = getFavorites();

      if (favoriteIds.length === 0) {
        setRecipes([]);
        return;
      }

      const requests = favoriteIds.map((id) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        ).then((res) => res.json())
      );

      const results = await Promise.all(requests);
      const meals = results.map((r) => r.meals[0]);
      setRecipes(meals);
    }

    fetchFavorites();
  }, []);

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#023535",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "#F4ECE7" }}>My Favorites</h2>

      {recipes.length === 0 ? (
        <p style={{ color: "#F4ECE7" }}>No favorites yet.</p>
      ) : (
        <div style={{ display: "grid", gap: "20px" }}>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
