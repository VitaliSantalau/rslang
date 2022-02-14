import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectToken, selectUserId } from '../../auth/authSlice';
import { IWord } from '../../interfaces/IWord';
import { useGetListUserWordsQuery } from '../book/bookApiSlice';
import { changeCharter } from '../book/bookSlice';
import Spinner from '../spinner/Spinner';
import Word from '../word/Word';
import CustomError from './CustomError';
import './ListHardWords.css';

function HardWords() {
  const token = useAppSelector(selectToken);
  const userId = useAppSelector(selectUserId) as string;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth');
      dispatch(changeCharter(1));
    }
  });

  const audioObj = useMemo(() => new Audio(), []);

  const {
    data, isLoading, isSuccess, isError, error,
  } = useGetListUserWordsQuery({ userId });

  return (
    <ul className="listWords">
      {
        isLoading && <Spinner />
      }
      {
        isError
        && <CustomError error={error as FetchBaseQueryError} />
      }
      {
        isSuccess
        && data.map((word: IWord) => (
          <Word
            key={word.id}
            currentWord={word}
            audioObj={audioObj}
            initMode="neut"
          />
        ))
      }
    </ul>
  );
}

export default HardWords;
