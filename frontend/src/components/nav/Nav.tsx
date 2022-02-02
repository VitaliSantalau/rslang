import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/book">
        Book
      </NavLink>
    </nav>
  );
}

export default Nav;
