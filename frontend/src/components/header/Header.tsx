import LogIn from '../controls/logIn/LogIn';
import LogOut from '../controls/logOut/LogOut';
import Menu from '../menu/Menu';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Menu />
      {
        true ? <LogIn /> : <LogOut />
      }
    </header>
  );
}

export default Header;
