import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div
      className="min-h-screen p-6"
      style={{ backgroundColor: "#023535" }} // dark background
    >
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-6">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl mb-4"
        />

        <h1 className="text-2xl font-bold mb-2">
          {recipe.strMeal}
        </h1>

        <p className="text-sm text-gray-600 mb-4">
          {recipe.strArea} • {recipe.strCategory}
        </p>

        <p className="leading-relaxed text-gray-800">
          {recipe.strInstructions}
        </p>
      </div>
    </div>
  );
}

export default Recipe;
