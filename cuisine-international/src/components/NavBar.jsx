import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="w-full px-6 py-4 flex justify-between items-center"
      style={{ backgroundColor: "#023535" }}
    >
      <h1 className="text-xl font-bold" style={{ color: "#F4511E" }}>
        Cuisine International
      </h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium ${
              isActive ? "underline" : ""
            }`
          }
          style={{ color: "#F4ECE7" }}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium ${
              isActive ? "underline" : ""
            }`
          }
          style={{ color: "#F4ECE7" }}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium ${
              isActive ? "underline" : ""
            }`
          }
          style={{ color: "#F4ECE7" }}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
