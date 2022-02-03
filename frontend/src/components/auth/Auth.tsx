import { NavLink } from 'react-router-dom';
import './Auth.css';

function Auth() {
  return (
    <NavLink
      to="/auth"
      className="auth-link"
    >
      {
        true ? 'Log in' : 'Log out'
      }
    </NavLink>
  );
}

export default Auth;
