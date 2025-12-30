import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />

        {/* Placeholder routes */}
        <Route path="/about" element={<div className="p-10">About Page</div>} />
        <Route path="/contact" element={<div className="p-10">Contact Page</div>} />
      </Routes>
    </>
  );
}

export default App;
