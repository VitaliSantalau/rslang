import './Nav.css';
import { NavLink } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  handleClick: () => void;
}

function Nav({
  isOpen, handleClick,
}: Props) {
  const navClassName = `nav ${
    isOpen ? 'open' : ''
  }`;

  return (
    <nav className={navClassName}>
      <NavLink to="/" onClick={() => handleClick()}>
        Home
      </NavLink>
      <NavLink to="/book">
        Book
      </NavLink>
      <NavLink to="/games">
        Games
      </NavLink>
      <NavLink to="/stat">
        Statistics
      </NavLink>
      <NavLink to="/about">
        About us
      </NavLink>
    </nav>
  );
}

export default Nav;
