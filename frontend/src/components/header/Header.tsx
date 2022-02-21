import { useSelector } from 'react-redux';
import { selectName, selectToken } from '../../auth/authSlice';
import LogIn from '../controls/logIn/LogIn';
import LogOut from '../controls/logOut/LogOut';
import Menu from '../menu/Menu';
import './Header.css';

function Header() {
  const token = useSelector(selectToken);
  const name = useSelector(selectName);

  return (
    <header className="header">
      <Menu />
      <div className="user-name-container">
        {
          token && (
            <p className="name">{name}</p>
          )
        }
        {token ? <LogOut /> : <LogIn />}
      </div>
    </header>
  );
}

export default Header;
