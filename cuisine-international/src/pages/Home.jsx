import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) {
      setMeals([]);
      setFilteredMeals([]);
      return;
    }

    const fetchMeals = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }

        const data = await response.json();
        const results = data.meals || [];

        setMeals(results);
        setFilteredMeals(results); // reset filters after fetch
      } catch (err) {
        setError(err.message);
        setMeals([]);
        setFilteredMeals([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [searchTerm]);

  useEffect(() => {
    if (!filterType) {
      setFilteredMeals(meals);
      return;
    }

    if (filterType === "cuisine") {
      const uniqueByArea = meals.filter(
        (meal, index, self) =>
          index === self.findIndex((m) => m.strArea === meal.strArea)
      );
      setFilteredMeals(uniqueByArea);
    }

    if (filterType === "mealType") {
      const uniqueByCategory = meals.filter(
        (meal, index, self) =>
          index === self.findIndex((m) => m.strCategory === meal.strCategory)
      );
      setFilteredMeals(uniqueByCategory);
    }
  }, [filterType, meals]);

  return (
    <div className="min-h-screen bg-[#023535] px-6 py-8">
      <SearchBar
        onSearch={setSearchTerm}
        onFilterChange={setFilterType}
      />

      {loading && (
        <p className="text-white mt-6">Loading recipes...</p>
      )}

      {error && (
        <p className="text-red-400 mt-6">{error}</p>
      )}

      {!loading && !error && filteredMeals.length === 0 && searchTerm && (
        <p className="text-white mt-6">
          No recipes found. Try another search.
        </p>
      )}

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMeals.map((meal) => (
          <RecipeCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Home;
