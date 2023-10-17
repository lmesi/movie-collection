import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
  return (
    <div className="top-bar-container">
      <Link to="/">Home</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/series">Series</Link>
    </div>
  );
}

export default Navbar;
