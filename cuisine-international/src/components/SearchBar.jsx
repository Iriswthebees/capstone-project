import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    onSearch(trimmedQuery);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mb-6 px-4"
    >
      <label htmlFor="search" className="sr-only">
        Search for a recipe
      </label>

      <div className="flex gap-2">
        <input
          id="search"
          type="search"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-orange-500 px-5 py-2 text-white font-medium hover:bg-orange-600 transition"
        >
          Search
        </button>
      </div>
    </form>
  );
}
