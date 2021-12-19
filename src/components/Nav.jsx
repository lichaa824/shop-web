import { Link } from "react-router-dom";
import "../styles/nav.scss";

function Nav() {
  return (
    <nav className="nav-pre">
      <Link to="/"> Home </Link>
      <Link to="shop">
        Shop
      </Link>
    </nav>
  );
}

export default Nav;
