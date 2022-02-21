/* eslint-disable react/no-array-index-key */
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import handleStat from '../../../statistic/handleStat';
import {
  resetMode, selectCorrect, selectError, TAnswer,
} from '../../gameSlice';
import './Result.css';

interface IProps {
  game: 'audiochallenge' | 'sprint'
}

function Result({ game }: IProps) {
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
    if (type === 'start') navigate(`/games/${game}`);

    dispatch(resetMode());
  };

  return (
    <div className="game-result">
      <div className="score-container">
        <p>your round score</p>
        <p>
          {correct.length * 10}
        </p>
      </div>
      <div className="correctAnswers-container">
        <p className="correct-tittle">Correct answers</p>
        <ul className="correct-container">
          {
            [...correct].map((el: TAnswer, i) => (
              <li key={`correct${i}`}>
                <p className="result-word">{el.word}</p>
                <p className="result-transl">{el.translate}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="wrongAnswers-container">
        <p className="wrong-tittle">Wrong answers</p>
        <ul className="error-container">
          {
            [...error].map((el: TAnswer, i) => (
              <li key={`error${i}`}>
                <p className="result-word">{el.word}</p>
                <p className="result-transl">{el.translate}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="backBtns-container">
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
    </div>
  );
}

export default Result;
