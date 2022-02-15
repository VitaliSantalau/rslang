/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/store';
import { selectUserId } from '../../../auth/authSlice';
import {
  useCreateWordMutation, useDeleteWordMutation, useUpdateWordMutation,
} from '../../book/bookApiSlice';
import '../Word.css';

interface IProps {
  mode: 'neut'|'hard'|'learned';
  wordId: string
}

interface IPropsModifyWord {
  difficulty: 'neut'|'hard'|'learned';
  optional: unknown,
}

function HardBtn({ mode, wordId }: IProps) {
  const userId = useAppSelector(selectUserId) as string;

  const [isHard, setIsHard] = useState(mode === 'hard');

  const [createWord] = useCreateWordMutation();
  const [updateWord] = useUpdateWordMutation();
  const [deleteWord] = useDeleteWordMutation();

  useEffect(() => {
    if (isHard && mode === 'neut') {
      const word: IPropsModifyWord = {
        difficulty: 'hard',
        optional: {},
      };
      createWord({ userId, wordId, word });
    }
    if (isHard && mode === 'learned') {
      const word: IPropsModifyWord = {
        difficulty: 'hard',
        optional: {},
      };
      updateWord({ userId, wordId, word });
    }
    if (!isHard && mode === 'hard') {
      deleteWord({ userId, wordId });
    }
  }, [isHard, userId, wordId, mode, createWord, updateWord, deleteWord]);

  return (
    <button
      type="button"
      className={`btn-hard ${isHard ? 'from' : 'to'}`}
      onClick={() => setIsHard(!isHard)}
    >
      hard
    </button>
  );
}

export default HardBtn;
