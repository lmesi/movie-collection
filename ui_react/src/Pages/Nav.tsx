import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/collections">Collections</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/series">Series</Link>
    </>
  );
}

export default Navbar;
