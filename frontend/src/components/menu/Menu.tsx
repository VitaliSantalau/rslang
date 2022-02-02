import { useState } from 'react';
import Nav from '../nav/Nav';
import './Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="menu">
      <button
        type="button"
        className="hamburger"
        onClick={handleClick}
      >
        menu
      </button>
      {
        isOpen && <Nav />
      }
    </div>
  );
}

export default Menu;
