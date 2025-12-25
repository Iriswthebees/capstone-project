import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Home() {
  // Temporary recipe data (replace later with API data)
  const [recipes] = useState([
    { id: 1, name: "Jollof Rice", cuisine: "African" },
    { id: 2, name: "Pizza Margherita", cuisine: "Italian" },
    { id: 3, name: "Sushi Rolls", cuisine: "Asian" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  // 🔍 Handles search input
  function handleSearch(query) {
    setSearchQuery(query);
  }

  // 🧭 Handles dropdown filter
  function handleFilterChange(filter) {
    setSelectedFilter(filter);
  }

  // 🧠 Filter logic (simple + readable)
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesFilter = selectedFilter
      ? recipe.cuisine === selectedFilter
      : true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#023535] px-4 py-8">
      {/* Page heading */}
      <h1 className="text-2xl font-bold text-[#F4ECE7] text-center mb-6">
        Explore Recipes
      </h1>

      {/* Search bar */}
      <SearchBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        filterOptions={["African", "Italian", "Asian"]}
      />

      {/* Results */}
      <div className="mt-8 max-w-4xl mx-auto grid gap-4">
        {filteredRecipes.length === 0 ? (
          <p className="text-center text-[#F4ECE7]">
            No recipes found.
          </p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-[#F4ECE7] p-4 rounded-lg shadow"
            >
              <h2 className="text-lg font-semibold text-black">
                {recipe.name}
              </h2>
              <p className="text-sm text-gray-700">
                Cuisine: {recipe.cuisine}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
