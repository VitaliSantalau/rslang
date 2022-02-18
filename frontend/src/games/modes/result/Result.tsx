import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import handleStat from '../../../statistic/handleStat';
import {
  resetMode, selectCorrect, selectError, TAnswer,
} from '../../gameSlice';
import './Result.css';

function Result() {
  const correct = useAppSelector(selectCorrect);
  const error = useAppSelector(selectError);

  const correctIds = [...correct].map((el) => el.id);
  const errorIds = [...error].map((el) => el.id);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBack = (type: 'games' | 'start') => {
    handleStat({
      correct: correctIds, error: errorIds,
    });

    if (type === 'games') navigate('/games');
    if (type === 'start') navigate('/games/audiochallenge');

    dispatch(resetMode());
  };

  return (
    <div className="game-result">
      <p>your round score</p>
      <p>
        {correct.length * 10}
      </p>
      <p>Correct answers</p>
      <ul className="correct-container">
        {
          [...correct].map((el: TAnswer) => (
            <li className="correct">
              {el.word}
              {el.translate}
            </li>
          ))
        }
      </ul>
      <p>Wrong answers</p>
      <ul className="error-container">
        {
          [...error].map((el: TAnswer) => (
            <li className="error">
              {el.word}
              {el.translate}
            </li>
          ))
        }
      </ul>
      <button
        type="button"
        onClick={() => handleBack('games')}
      >
        back to games
      </button>
      <button
        type="button"
        onClick={() => handleBack('start')}
      >
        back to start
      </button>
    </div>
  );
}

export default Result;
