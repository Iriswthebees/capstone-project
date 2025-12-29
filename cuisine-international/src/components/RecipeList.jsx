import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;
