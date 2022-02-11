import { useState } from 'react';
import Hamburger from '../controls/hamburger/Hamburger';
import Nav from '../nav/Nav';
import './Menu.css';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <Hamburger
        isOpen={isOpen}
        handleClick={handleClick}
      />
      <Nav
        isOpen={isOpen}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Menu;
