import { NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Menu />
      <NavLink to="/auth">
        Login
      </NavLink>
    </header>
  );
}

export default Header;
