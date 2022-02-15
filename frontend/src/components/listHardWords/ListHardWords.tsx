/* eslint-disable no-underscore-dangle */
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectToken, selectUserId } from '../../auth/authSlice';
import { IUserWord } from '../../interfaces/IWord';
import { useGetListUserHardWordsQuery } from '../book/bookApiSlice';
import { changeCharter } from '../book/bookSlice';
import Spinner from '../spinner/Spinner';
import HardWord from '../word/HardWord';
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
  }, [dispatch, navigate, token]);

  const audioObj = useMemo(() => new Audio(), []);

  const {
    data, isLoading, isFetching, isError, error,
  } = useGetListUserHardWordsQuery({ userId });

  if (isFetching || isLoading) return <Spinner />;
  if (isError) return <CustomError error={error as FetchBaseQueryError} />;

  return (
    <ul className="listWords">
      {
        data && data.length === 0
        && (
        <p className="listHardWords error">nothing to show, it is empty here</p>
        )
      }
      {
        data && data.length > 0
        && data.map((word: IUserWord) => (
          <HardWord
            key={word._id}
            currentWord={word}
            audioObj={audioObj}
          />
        ))
      }
    </ul>
  );
}

export default HardWords;
