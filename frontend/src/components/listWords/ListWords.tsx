/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/media-has-caption */
import './ListWords.css';
import { useEffect, useMemo, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import Word from '../word/Word';
import {
  useGetListUserWordsQuery, useGetListWordsQuery,
} from '../book/bookApiSlice';
import { useAppSelector } from '../../app/store';
import { selectCharter, selectPage } from '../book/bookSlice';
import { IUserWord, IWord } from '../../interfaces/IWord';
import Spinner from '../spinner/Spinner';
import CustomError from './CustomError';
import { selectToken, selectUserId } from '../../auth/authSlice';

function ListWords() {
  const currentPage = useAppSelector(selectPage);
  const currentCharter = useAppSelector(selectCharter);
  const token = useAppSelector(selectToken);
  const userId = useAppSelector(selectUserId) as string;

  const audioObj = useMemo(() => new Audio(), []);

  const [skip, setSkip] = useState(true);

  useEffect(() => {
    if (token) {
      setSkip(false);
    } else setSkip(true);
  }, [token]);

  const {
    data, isLoading, isError, error,
  } = useGetListWordsQuery({
    charter: currentCharter - 1, page: currentPage - 1,
  });

  const {
    data: userData, isLoading: isLoadingUser,
    isError: isErrorUser, error: errorUser, isFetching,
  } = useGetListUserWordsQuery({
    userId, charter: currentCharter - 1, page: currentPage - 1,
  }, { skip });

  if (
    isLoading || isLoadingUser || isFetching
  ) return <Spinner />;

  if (isError) return <CustomError error={error as FetchBaseQueryError} />;
  if (isErrorUser) {
    return <CustomError error={errorUser as FetchBaseQueryError} />;
  }

  const getMode = (id: string) => {
    const currentUserWord = userData
      ? userData.filter((el: IUserWord) => el._id === id)
      : null;

    return currentUserWord?.length
      ? currentUserWord[0].userWord.difficulty
      : 'neut';
  };

  return (
    <ul className="listWords">
      {
        data.map((word: IWord) => (
          <Word
            key={word.id}
            currentWord={word}
            audioObj={audioObj}
            mode={getMode(word.id)}
          />
        ))
      }
    </ul>
  );
}

export default ListWords;
