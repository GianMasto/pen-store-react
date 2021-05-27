import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <h1 className="logo">pen store</h1>
      <ul className="nav-items">
        <li className="nav-item">
          <a class="nav-link" href="/">ballpoint</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/">fountain</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/">rollerball</a>
        </li>
        <li className="nav-item">
          <a class="nav-link" href="/">pencils</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
