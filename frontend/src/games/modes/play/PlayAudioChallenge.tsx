import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../../app/store';
import { selectCharter, selectPage } from '../../gameSlice';
import '../../Game.css';
import { useGetMainWordsQuery } from '../../gameApiSlice';
import Spinner from '../../../components/spinner/Spinner';
import NextBtn from '../../components/nextBtn/NextBtn';
import Player from '../../components/player/Player';
import Answers from '../../components/answers/Answers';
import CorrectAnswer from '../../components/correctAnswer/CorrectAnswer';
import FinishBtn from '../../components/finishBtn.tsx/FinishBtn';

export type TState = 'question' | 'answer';

function PlayAudioChallenge() {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState<TState>('question');
  const [isFinish, setIsFinish] = useState(false);

  const handleState = (current: TState) => {
    setState(current);
  };

  const charter = useAppSelector(selectCharter);
  const page = useAppSelector(selectPage);

  const audioObj = useMemo(() => new Audio(), []);

  const {
    data, isFetching, isLoading,
  } = useGetMainWordsQuery({ charter, page });

  const handleChangeIndex = () => {
    if (data && index < data.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (data && index === data.length - 1) {
      setIsFinish(true);
    }
  }, [index]);

  if (isFetching || isLoading) return <Spinner />;

  return (
    <div className="game-play">
      {
        data
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
            <Answers
              wordId={data[index].id}
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
    </div>
  );
}

export default PlayAudioChallenge;
