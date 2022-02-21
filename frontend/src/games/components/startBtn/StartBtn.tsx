import { useAppDispatch } from '../../../app/store';
import { changeMode } from '../../gameSlice';
import './StartBtn.css';

function StartBtn() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeMode('play'));
  };

  return (
    <button
      type="button"
      className="start-btn"
      onClick={handleClick}
    >
      start game
    </button>
  );
}

export default StartBtn;
