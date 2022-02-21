/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import './AnswerBtn.css';

interface IProps<T> {
  handleAnswer: (type: T) => void;
  type: T;
}

function NextBtn({
  handleAnswer, type,
}: IProps<'correct' | 'wrong'>) {
  const handleClick = () => {
    handleAnswer(type);
  };

  return (
    <button
      type="button"
      className={`answer-btn ${type}`}
      onClick={handleClick}
    >
      {type}
    </button>
  );
}

export default NextBtn;
