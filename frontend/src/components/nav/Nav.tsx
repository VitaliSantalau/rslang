import './Nav.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { IRoute, routes } from '../../routes/routes';

type Props = {
  isOpen: boolean;
  handleClick: () => void;
}

function Nav({ isOpen, handleClick }: Props) {
  const navClassName = `nav ${isOpen ? 'open' : ''}`;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutClick = (event: MouseEvent) => {
      if (
        isOpen
        && ref.current
        && !ref.current.contains(event.target as Node)) {
        handleClick();
      }
    };
    document.addEventListener('mousedown', handleOutClick);
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, [handleClick, isOpen]);

  return (
    <nav className={navClassName} ref={ref}>
      {
        routes
          .map((route: IRoute) => (
            <NavLink
              to={route.path}
              onClick={() => handleClick()}
              className={({ isActive }) => (
                `nav-link${!isActive ? ' unselected' : ''}`
              )}
              key={route.id}
            >
              {route.name}
            </NavLink>
          ))
      }
    </nav>
  );
}

export default Nav;
