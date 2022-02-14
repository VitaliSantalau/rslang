/* eslint-disable jsx-a11y/media-has-caption */
import './ListWords.css';
import { useEffect, useMemo, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import Word from '../word/Word';
import { useGetListUserWordsQuery, useGetListWordsQuery } from '../book/bookApiSlice';
import { useAppSelector } from '../../app/store';
import { selectCharter, selectPage } from '../book/bookSlice';
import { IWord } from '../../interfaces/IWord';
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
    isError: isErrorUser, error: errorUser,
  } = useGetListUserWordsQuery({ userId }, { skip });

  if (isLoading || isLoadingUser) return <Spinner />;
  if (isError) return <CustomError error={error as FetchBaseQueryError} />;
  if (isErrorUser) {
    return <CustomError error={errorUser as FetchBaseQueryError} />;
  }

  const getMode = (id: string) => {
    console.log(userData);
    return (userData && userData.length)
      ? userData.find((el: any) => el.id === id).difficulty
      : 'neut';
  };

  const listWords = data.map((word: IWord) => (
    <Word
      key={word.id}
      currentWord={word}
      audioObj={audioObj}
      initMode={getMode(word.id)}
    />
  ));

  return (
    <ul className="listWords">
      {listWords}
    </ul>
  );
}

export default ListWords;
