import { Link } from "react-router-dom";

export default function RecipeCard({ meal }) {
  if (!meal) return null;

  const {
    idMeal,
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
  } = meal;

  return (
    <Link to={`/recipe/${idMeal}`} className="block">
      <article className="h-full rounded-xl overflow-hidden bg-[#023535] shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-full h-48 object-cover"
          loading="lazy"
        />

        {/* Content */}
        <div className="p-4 bg-[#F4ECE7]">
          <h2 className="text-lg font-semibold text-black mb-2">
            {strMeal}
          </h2>

          <p className="text-sm text-black">
            <span className="font-medium">Category:</span>{" "}
            {strCategory || "Unknown"}
          </p>

          <p className="text-sm text-black">
            <span className="font-medium">Cuisine:</span>{" "}
            {strArea || "Unknown"}
          </p>
        </div>
      </article>
    </Link>
  );
}
