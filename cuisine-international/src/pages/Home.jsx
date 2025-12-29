import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState(""); // "cuisine" | "meal type"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔹 Fetch recipes from MealDB
  useEffect(() => {
    if (!searchTerm) {
      setRecipes([]);
      return;
    }

    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();

        // MealDB returns { meals: null } when no results
        setRecipes(data.meals || []);
      } catch (err) {
        setError("Something went wrong while fetching recipes.");
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  // 🔹 Safe filter logic (NO disappearing UI)
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.strMeal
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesFilter = true;

    if (filterType === "cuisine") {
      matchesFilter = Boolean(recipe.strArea);
    }

    if (filterType === "meal type") {
      matchesFilter = Boolean(recipe.strCategory);
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: "#023535" }}>
      <SearchBar
        onSearch={setSearchTerm}
        onFilterChange={setFilterType}
        filterOptions={["cuisine", "meal type"]}
      />

      {loading && (
        <p className="text-center mt-8 text-white">Loading recipes...</p>
      )}

      {error && (
        <p className="text-center mt-8 text-red-400">{error}</p>
      )}

      {!loading && !error && filteredRecipes.length === 0 && searchTerm && (
        <p className="text-center mt-10 text-white">
          No recipes found.
        </p>
      )}

      {!loading && !error && filteredRecipes.length > 0 && (
        <RecipeList recipes={filteredRecipes} />
      )}
    </div>
  );
}

export default Home;
