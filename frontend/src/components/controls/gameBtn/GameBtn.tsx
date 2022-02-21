import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../app/store';
import { changeMode, setSource } from '../../../games/gameSlice';
import './GameBtn.css';

interface IProps {
  type: 'audiochallenge' | 'sprint';
}

function GameBtn({ type }: IProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(changeMode('play'));
    dispatch(setSource('book'));

    navigate(`/games/${type}`);
  };

  return (
    <button
      type="button"
      className="gameBtn"
      onClick={handleClick}
    >
      {type}
    </button>
  );
}

export default GameBtn;
