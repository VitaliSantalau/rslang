/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch } from '../../../app/store';
import { resetUser } from '../../../auth/authSlice';
import './LogOut.css';

function LogOut() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    ['userId', 'name', 'token', 'refreshToken'].forEach((item) => {
      localStorage.removeItem(item);
    });

    dispatch(resetUser());
  };

  return (
    <div
      className="auth-link"
      onClick={handleLogout}
    >
      Log out
    </div>
  );
}

export default LogOut;
