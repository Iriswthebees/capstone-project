import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(searchTerm) {
    setLoading(true);
    setError(null);
    setRecipes([]);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }

      const data = await response.json();

      if (!data.meals) {
        setError("No recipes found. Try another search.");
        return;
      }

      setRecipes(data.meals);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Cuisine International
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p className="text-center text-gray-600">Loading recipes...</p>
      )}

      {error && (
        <p className="text-center text-red-500 font-medium">{error}</p>
      )}

      {/* Temporary debug output */}
      {recipes.length > 0 && (
        <pre className="mt-6 bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          {JSON.stringify(recipes, null, 2)}
        </pre>
      )}
    </main>
  );
}
