import { Link, NavLink } from 'react-router-dom'

import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav>
      <h1 className="logo"><Link to="/">pen store</Link></h1>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/category/ballpoint/" activeClassName="selected" className="nav-link" href="/">ballpoint</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/fountain/" activeClassName="selected" className="nav-link" href="/">fountain</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/rollerball/" activeClassName="selected" className="nav-link" href="/">rollerball</NavLink>
        </li>
      </ul>
        <CartWidget />
    </nav>
  );
}

export default NavBar;
