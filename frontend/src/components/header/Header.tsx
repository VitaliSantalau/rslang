import Auth from '../auth/Auth';
import Menu from '../menu/Menu';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Menu />
      <Auth />
    </header>
  );
}

export default Header;
