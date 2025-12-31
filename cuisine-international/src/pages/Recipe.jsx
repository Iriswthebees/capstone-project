import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();

        if (!data.meals) {
          throw new Error("Recipe not found");
        }

        setRecipe(data.meals[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading recipe...</p>;
  }

  if (error) {
    return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  }

  // 🔹 Extract ingredients + measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  // 🔹 YouTube embed
  const youtubeId = recipe.strYoutube
    ? recipe.strYoutube.split("v=")[1]
    : null;

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#023535",
        minHeight: "100vh",
        color: "#F4ECE7",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#F4511E",
          textDecoration: "none",
          marginBottom: "16px",
          display: "inline-block",
        }}
      >
        ← Back to Home
      </Link>

      <h2 style={{ marginBottom: "16px" }}>{recipe.strMeal}</h2>

      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "8px",
          marginBottom: "24px",
        }}
      />

      <p>
        <strong>Category:</strong> {recipe.strCategory}
      </p>
      <p>
        <strong>Cuisine:</strong> {recipe.strArea}
      </p>

      <h3 style={{ marginTop: "24px" }}>Ingredients</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 style={{ marginTop: "24px" }}>Instructions</h3>
      <p style={{ whiteSpace: "pre-line" }}>{recipe.strInstructions}</p>

      {youtubeId && (
        <>
          <h3 style={{ marginTop: "24px" }}>Video Tutorial</h3>
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="Recipe Video"
            allowFullScreen
            style={{ borderRadius: "8px", marginTop: "12px" }}
          ></iframe>
        </>
      )}

      {recipe.strSource && (
        <p style={{ marginTop: "24px" }}>
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#F4511E" }}
          >
            View Full Recipe Source
          </a>
        </p>
      )}
    </div>
  );
}

export default Recipe;
