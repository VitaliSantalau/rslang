import { useState } from 'react';
import { useAppSelector } from '../../../app/store';
import { selectCharter, selectPage } from '../../gameSlice';
import '../../Game.css';
import { useGetMainWordsQuery } from '../../gameApiSlice';
import Spinner from '../../../components/spinner/Spinner';
import NextBtn from '../../components/nextBtn/NextBtn';
import Player from '../../components/player/Player';
import Answers from '../../components/answers/Answers';

function PlayAudioChallenge() {
  const [index, setIndex] = useState(0);

  const charter = useAppSelector(selectCharter);
  const page = useAppSelector(selectPage);

  const {
    data, isFetching, isLoading,
  } = useGetMainWordsQuery({ charter, page });

  const handleChangeIndex = () => {
    if (data && index < data.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  if (isFetching || isLoading) return <Spinner />;

  return (
    <div className="game-play">
      {
        data
        && (
          <>
            <Player path={data[index].audio} />
            <Answers wordId={data[index].id} data={data} />
            <NextBtn
              handleChangeIndex={handleChangeIndex}
            />
          </>
        )
      }
    </div>
  );
}

export default PlayAudioChallenge;
