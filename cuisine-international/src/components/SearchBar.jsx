function SearchBar({ onSearch, onFilterChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => onSearch(e.target.value)}
        className="px-4 py-2 rounded-lg w-full sm:w-64 bg-[#F4ECE7] text-black"
      />

      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="px-4 py-2 rounded-lg bg-[#F4ECE7] text-black"
      >
        <option value="">Filter by</option>
        <option value="cuisine">Cuisine</option>
        <option value="mealType">Meal Type</option>
      </select>
    </div>
  );
}

export default SearchBar;
