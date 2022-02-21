import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store';
import { resetAnswers, selectMode } from '../../gameSlice';
import '../../Game.css';
import Spinner from '../../../components/spinner/Spinner';
import NextBtn from '../../components/nextBtn/NextBtn';
import Player from '../../components/player/Player';
import CorrectAnswer from '../../components/correctAnswer/CorrectAnswer';
import FinishBtn from '../../components/finishBtn.tsx/FinishBtn';
import { selectCharter, selectPage } from '../../../components/book/bookSlice';
import { selectUserId } from '../../../auth/authSlice';
import AnswersBook from '../../components/answers/AnswersBook';
import { useGetBookWordsQuery } from '../../gameApiSlice';

export type TState = 'question' | 'answer';

function PlayAudioChallengeBook() {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<TState>('question');
  const [isFinish, setIsFinish] = useState(false);

  const handleState = (current: TState) => {
    setState(current);
  };

  const userId = useAppSelector(selectUserId) as string;
  const mode = useAppSelector(selectMode);
  const charter = useAppSelector(selectCharter) - 1;
  const page = useAppSelector(selectPage) - 1;

  const dispatch = useAppDispatch();

  const audioObj = useMemo(() => new Audio(), []);

  const {
    data, isFetching, isLoading,
  } = useGetBookWordsQuery({ userId, charter, page });

  const handleChangeIndex = () => {
    if (data && index < data.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (mode === 'play') {
      dispatch(resetAnswers());
    }
  }, [dispatch, mode]);

  useEffect(() => {
    if (data && index === data.length - 1) {
      setIsFinish(true);
    }
  }, [data, index]);

  if (isFetching || isLoading) return <Spinner />;

  return (
    <div className="game-play">
      {
        data && (data.length >= 5)
        && (
          <>
            <div className="question-container">
              {
                state === 'question'
                && (
                  <Player
                    path={data[index].audio}
                    audio={audioObj}
                  />
                )
              }
              {
                state === 'answer'
                && <CorrectAnswer data={data[index]} />
              }
            </div>
            <AnswersBook
              word={data[index]}
              data={data}
              state={state}
              handleState={handleState}
            />
            {
              !isFinish
                ? (
                  <NextBtn
                    handleChangeIndex={handleChangeIndex}
                    handleState={handleState}
                  />
                )
                : <FinishBtn />
            }
          </>
        )
      }
      {
        data && (data.length <= 5)
        && <p>Not enough words to play</p>
      }
    </div>
  );
}

export default PlayAudioChallengeBook;
