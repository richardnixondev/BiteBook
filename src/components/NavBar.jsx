import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="home">
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="recipes">
          <Link to="/recipes">📖 Recipes</Link>
        </li>
        {/* <li className="fav">
          <Link to="/favorites">❤️ Favorites</Link>
        </li> */}
        <li className="addrecipe">
          <Link to="/addrecipe">🍰 Add Recipe</Link>
        </li>
        <li className="about">
          <Link to="/about">ℹ️ About</Link>
        </li>
      </ul>
    </nav>
  );
}
