import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  return (
    <nav>
      <h1 className="logo">pen store</h1>
      <ul className="nav-items">
        <li className="nav-item">
          <a className="nav-link" href="/">ballpoint</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">fountain</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">rollerball</a>
        </li>
      </ul>
        <CartWidget />
    </nav>
  );
}

export default NavBar;
