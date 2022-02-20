/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store';
import { resetMode } from '../../gameSlice';
import './ExitBtn.css';

function ExitBtn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/games');
    dispatch(resetMode());
  };

  return (
    <button
      type="button"
      className="exit-btn"
      onClick={handleClick}
    />
  );
}

export default ExitBtn;
