import { NavLink } from 'react-router-dom';
import './LogIn.css';

function LogIn() {
  return (
    <NavLink
      to="/auth"
      className="auth-link"
    >
      Log in / Register
    </NavLink>
  );
}

export default LogIn;
