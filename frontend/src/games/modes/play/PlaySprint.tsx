import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import {
  changeMode,
  resetAnswers, selectCharter, selectMode, selectPage, setCorrect, setError,
} from '../../gameSlice';
import '../../Game.css';
import { useGetMainWordsQuery } from '../../gameApiSlice';
import Spinner from '../../../components/spinner/Spinner';
import AnswerBtn from '../../components/answerBtn/AnswerBtn';
import { IWord } from '../../../interfaces/IWord';
import getAnswer from '../../../utils.ts/getAnswer';
import Timer from '../../components/timer/Timer';
import { qntSec } from '../../../constants/constants';
import correct from '../../../assets/sounds/correct.mp3';
import wrong from '../../../assets/sounds/wrong.mp3';
import endRound from '../../../assets/sounds/endRound.mp3';

function Sprint() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<IWord | undefined>();
  const [
    state, setState,
  ] = useState<'neut' | 'correct' | 'wrong'>('neut');
  const [isFinish, setIsFinish] = useState(false);

  const mode = useAppSelector(selectMode);
  const charter = useAppSelector(selectCharter);
  const page = useAppSelector(selectPage);

  const dispatch = useAppDispatch();

  const trackCorrect = useMemo(() => new Audio(correct), []);
  const trackWrong = useMemo(() => new Audio(wrong), []);
  const trackEndRound = useMemo(() => new Audio(endRound), []);

  const {
    data, isFetching, isLoading,
  } = useGetMainWordsQuery({ charter, page });

  const handleAnswer = useCallback((
    type: 'correct' | 'wrong',
  ) => {
    if (data && answer) {
      const {
        id, word, wordTranslate,
      } = data[index];
      const answerId = answer.id;

      if (
        (type === 'correct' && id === answerId)
        || (type === 'wrong' && id !== answerId)
      ) {
        setState('correct');

        trackCorrect.play();

        dispatch(setCorrect({
          id, word, translate: wordTranslate,
        }));
      }
      if (
        (type === 'wrong' && id === answerId)
        || (type === 'correct' && id !== answerId)
      ) {
        setState('wrong');

        trackWrong.play();

        dispatch(setError({
          id, word, translate: wordTranslate,
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
        getAnswer({ data, word: data[index] }),
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
        data
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
      <Timer
        qntSec={qntSec}
        setIsFinish={setIsFinish}
      />
    </div>
  );
}

export default Sprint;
