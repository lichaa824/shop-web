import { Link } from "react-router-dom";
import "../styles/nav.scss";

function Nav() {
  return (
    <nav className="nav-pre">
      <Link className="home-tab grow" to="/">
        {" "}
        Home{" "}
      </Link>
      <Link className="shop-tab grow" to="shop">
        Shop
      </Link>
    </nav>
  );
}

export default Nav;
