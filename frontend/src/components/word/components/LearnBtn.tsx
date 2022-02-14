/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import '../Word.css';

interface IProps {
  mode: 'neut'|'hard'|'learned';
  wordId: string
}

function LearnBtn({ mode, wordId }: IProps) {
  const [isLearn, setIsLearn] = useState(false);

  return (
    <button
      type="button"
      className="btn-learn"
      onClick={() => setIsLearn(!isLearn)}
    >
      {isLearn ? 'from learn' : 'to learn'}
    </button>
  );
}

export default LearnBtn;
