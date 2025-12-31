import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#023535",
        padding: "16px 32px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // 👈 split left & right
          alignItems: "center",
        }}
      >
        {/* Brand / Title */}
        <h1
          style={{marginLeft: "18px",
            color: "#F4ECE7",
            fontSize: "18px",
            margin: 0,
          }}
        >
          Cuisine International
        </h1>

        {/* Navigation links */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "28px" }}>
            <NavLink
              to="/"
              style={{ color: "#F4ECE7", textDecoration: "none" }}
            >
              Home
            </NavLink>
          </li>

          <li style={{ marginRight: "28px" }}>
            <NavLink
              to="/favorites"
              style={{ color: "#F4ECE7", textDecoration: "none" }}
            >
              Favorites
            </NavLink>
          </li>

          <li style={{ marginRight: "28px" }}>
            <NavLink
              to="/about"
              style={{ color: "#F4ECE7", textDecoration: "none" }}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              style={{ color: "#F4ECE7", textDecoration: "none" }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
