function About() {
  return (
    <div
      className="min-h-screen px-6 py-10 text-black"
      style={{ backgroundColor: "#023535" }}
    >
      <div className="max-w-3xl mx-auto bg-white rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-4">About Cuisine International</h1>

        <p className="mb-4">
          Cuisine International is a recipe discovery application that helps
          users explore meals from different cultures around the world.
        </p>

        <p className="mb-4">
          Users can search for recipes by name, view detailed cooking
          instructions, explore ingredients, and learn about different cuisines
          and meal types.
        </p>

        <p className="mb-4">
          This application uses the free public API provided by{" "}
          <a
            href="https://www.themealdb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium"
            style={{ color: "#F4511E" }}
          >
            TheMealDB
          </a>{" "}
          to fetch recipe data.
        </p>

        <p className="text-sm text-gray-600">
          Built as a frontend capstone project using React, React Router, and
          Tailwind CSS.
        </p>
      </div>
    </div>
  );
}

export default About;
