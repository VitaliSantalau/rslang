/* eslint-disable no-underscore-dangle */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import {
  changeMode,
  resetAnswers, selectMode, setCorrect, setError,
} from '../../gameSlice';
import '../../Game.css';
import { useGetBookWordsQuery } from '../../gameApiSlice';
import Spinner from '../../../components/spinner/Spinner';
import AnswerBtn from '../../components/answerBtn/AnswerBtn';
import { IUserWord } from '../../../interfaces/IWord';
import getAnswer from '../../../utils.ts/getAnswer';
import Timer from '../../components/timer/Timer';
import { qntSec } from '../../../constants/constants';
import correct from '../../../assets/sounds/correct.mp3';
import wrong from '../../../assets/sounds/wrong.mp3';
import endRound from '../../../assets/sounds/endRound.mp3';
import { selectCharter, selectPage } from '../../../components/book/bookSlice';
import { selectUserId } from '../../../auth/authSlice';

function PlaySprintBook() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<IUserWord | undefined>();
  const [
    state, setState,
  ] = useState<'neut' | 'correct' | 'wrong'>('neut');
  const [isFinish, setIsFinish] = useState(false);

  const userId = useAppSelector(selectUserId) as string;
  const mode = useAppSelector(selectMode);
  const charter = useAppSelector(selectCharter) - 1;
  const page = useAppSelector(selectPage) - 1;

  const dispatch = useAppDispatch();

  const trackCorrect = useMemo(() => new Audio(correct), []);
  const trackWrong = useMemo(() => new Audio(wrong), []);
  const trackEndRound = useMemo(() => new Audio(endRound), []);

  const {
    data, isFetching, isLoading,
  } = useGetBookWordsQuery({ userId, charter, page });

  const handleAnswer = useCallback((
    type: 'correct' | 'wrong',
  ) => {
    if (data && answer) {
      const {
        _id, word, wordTranslate,
      } = data[index];
      const answerId = answer._id;

      if (
        (type === 'correct' && _id === answerId)
        || (type === 'wrong' && _id !== answerId)
      ) {
        setState('correct');

        trackCorrect.play();

        dispatch(setCorrect({
          id: _id, word, translate: wordTranslate,
        }));
      }
      if (
        (type === 'wrong' && _id === answerId)
        || (type === 'correct' && _id !== answerId)
      ) {
        setState('wrong');

        trackWrong.play();

        dispatch(setError({
          id: _id, word, translate: wordTranslate,
        }));
      }
    }
    if (data && index < data.length - 1) {
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setState('neut');
      }, 800);
    }
    if (data && index === data.length - 1) {
      setTimeout(() => {
        setIsFinish(true);
      }, 800);
    }
  }, [answer, data, dispatch, index, trackCorrect, trackWrong]);

  useEffect(() => {
    if (data) {
      setAnswer(
        getAnswer({ data, word: data[index] }) as IUserWord,
      );
    }
  }, [data, index]);

  useEffect(() => {
    if (mode === 'play') {
      dispatch(resetAnswers());
    }
  }, [dispatch, mode]);

  useEffect(() => {
    if (isFinish) {
      trackEndRound.play();
      dispatch(changeMode('result'));
    }
  }, [dispatch, isFinish, trackEndRound]);

  useEffect(() => {
    const handleKeyPress = (
      e: globalThis.KeyboardEvent,
    ) => {
      if (e.code === 'Comma') {
        handleAnswer('correct');
      }
      if (e.code === 'Period') {
        handleAnswer('wrong');
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleAnswer]);

  if (isFetching || isLoading) return <Spinner />;

  return (
    <div className="game-play">
      {
        data && (data.length >= 5)
        && (
          <>
            <div className={`question-container ${state}`}>
              <div className="question-answer-container">
                <p>
                  {data[index].word}
                </p>
                <p>
                  {
                    answer
                    && answer.wordTranslate
                  }
                </p>
              </div>
            </div>
            <div className="choose-btns">
              <AnswerBtn
                handleAnswer={handleAnswer}
                type="correct"
              />
              <AnswerBtn
                handleAnswer={handleAnswer}
                type="wrong"
              />
            </div>
          </>
        )
      }
      {
        data && (data.length <= 5)
        && <p>Not enough words to play</p>
      }
      {
        data && (data.length >= 5)
        && (
          <Timer
            qntSec={qntSec}
            setIsFinish={setIsFinish}
          />
        )
      }
    </div>
  );
}

export default PlaySprintBook;
