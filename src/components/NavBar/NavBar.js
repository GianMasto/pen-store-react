import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar({ categories }) {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/">pen store</Link>
      </h1>
      <ul className="nav-items">
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <NavLink
              to={`/category/${category.id}/`}
              activeClassName="selected"
              className="nav-link"
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
