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

function LearnBtn({ mode, wordId }: IProps) {
  const userId = useAppSelector(selectUserId) as string;

  const [isLearn, setIsLearn] = useState(mode === 'learned');

  const [createWord] = useCreateWordMutation();
  const [updateWord] = useUpdateWordMutation();
  const [deleteWord] = useDeleteWordMutation();

  useEffect(() => {
    if (isLearn && mode === 'neut') {
      const word: IPropsModifyWord = {
        difficulty: 'learned',
        optional: {},
      };
      createWord({ userId, wordId, word });
    }
    if (isLearn && mode === 'hard') {
      const word: IPropsModifyWord = {
        difficulty: 'learned',
        optional: {},
      };
      updateWord({ userId, wordId, word });
    }
    if (!isLearn && mode === 'learned') {
      deleteWord({ userId, wordId });
    }
  }, [isLearn, createWord, deleteWord, mode, updateWord, userId, wordId]);

  return (
    <button
      type="button"
      className={`btn-learn ${isLearn ? 'from' : 'to'}`}
      onClick={() => setIsLearn(!isLearn)}
    >
      learned
    </button>
  );
}

export default LearnBtn;
