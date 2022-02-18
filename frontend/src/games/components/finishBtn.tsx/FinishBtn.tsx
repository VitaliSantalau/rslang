import { useAppDispatch } from '../../../app/store';
import { changeMode } from '../../gameSlice';
import './FinishBtn.css';

function FinishBtn() {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(changeMode('result'));
  };

  return (
    <button
      type="button"
      className="finish-btn"
      onClick={handleClick}
    >
      finish
    </button>
  );
}

export default FinishBtn;
