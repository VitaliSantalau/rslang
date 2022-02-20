import { useEffect, useState } from 'react';
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

function Sprint() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<IWord | undefined>();
  const [
    state, setState,
  ] = useState<'neut' | 'correct' | 'wrong'>('neut');
  const [isFinish, setIsFinish] = useState(false);

  const mode = useAppSelector(selectMode);
  const charter = useAppSelector(selectCharter);
  const page = useAppSelector(selectPage); // TODO get random number

  const dispatch = useAppDispatch();

  const {
    data, isFetching, isLoading,
  } = useGetMainWordsQuery({ charter, page });

  const handleAnswer = (
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

        dispatch(setCorrect({
          id, word, translate: wordTranslate,
        }));
      }
      if (
        (type === 'wrong' && id === answerId)
        || (type === 'correct' && id !== answerId)
      ) {
        setState('wrong');

        dispatch(setError({
          id, word, translate: wordTranslate,
        }));
      }
    }
    if (data && index < data.length - 1) {
      setTimeout(() => {
        setIndex((prev) => prev + 1);
        setState('neut');
      }, 1000);
    }
    if (data && index === data.length - 1) {
      setTimeout(() => {
        setIsFinish(true);
      }, 1000);
    }
  };

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
      dispatch(changeMode('result'));
    }
  }, [dispatch, isFinish]);

  if (isFetching || isLoading) return <Spinner />;

  return (
    <div className="game-play">
      {
        data
        && (
          <>
            <div className={`question-container ${state}`}>
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
            <div className="choose-btns">
              <AnswerBtn
                handleChangeIndex={handleAnswer}
                type="correct"
              />
              <AnswerBtn
                handleChangeIndex={handleAnswer}
                type="wrong"
              />
            </div>
          </>
        )
      }
    </div>
  );
}

export default Sprint;
