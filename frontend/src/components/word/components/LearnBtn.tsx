/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import '../Word.css';

interface IProps {
  handleLearn: (isLearn: boolean) => void;
  mode: 'neut'|'hard'|'learned';
}

function LearnBtn({ handleLearn, mode }: IProps) {
  const [isLearn, setIsLearn] = useState(false);

  useEffect(() => {
    handleLearn(isLearn);
  }, [handleLearn, isLearn]);

  useEffect(() => {
    if (mode === 'hard') {
      setIsLearn(false);
    }
  }, [mode]);

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
