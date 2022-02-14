/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/store';
import { selectUserId } from '../../../auth/authSlice';
import { useCreateWordMutation } from '../../book/bookApiSlice';
import '../Word.css';

interface IProps {
  handleHard: (isHard: boolean) => void;
  mode: 'neut'|'hard'|'learned';
  wordId: string
}

function HardBtn({ handleHard, mode, wordId }: IProps) {
  const userId = useAppSelector(selectUserId) as string;

  const [isHard, setIsHard] = useState(false);

  const [createWord, {
    data, isSuccess,
  }] = useCreateWordMutation();

  useEffect(() => {
    handleHard(isHard);
  }, [handleHard, isHard]);

  useEffect(() => {
    if (mode === 'learned') {
      setIsHard(false);
    }
  }, [mode]);

  const handleClick = () => {
    const wrd = {
      difficulty: isHard ? 'hard' : 'neut',
      optional: {},
    };
    const word = JSON.stringify(wrd);

    setIsHard(!isHard);
    createWord({ userId, wordId, word });
  };

  if (isSuccess) {
    console.log(data);
  }

  return (
    <button
      type="button"
      className="btn-hard"
      onClick={handleClick}
    >
      {isHard ? 'from hard' : 'to hard'}
    </button>
  );
}

export default HardBtn;
