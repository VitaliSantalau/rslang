import { useState } from 'react';
import { useAppSelector } from '../../../app/store';
import { selectUserId } from '../../../auth/authSlice';
import { selectCharter, selectPage } from '../../gameSlice';
import '../../Game.css';
import { useGetMainWordsQuery } from '../../gameApiSlice';
import { IWord } from '../../../interfaces/IWord';
import Spinner from '../../../components/spinner/Spinner';

function PlayAudioChallenge() {
  const [index, setIndex] = useState(0);

  const userId = useAppSelector(selectUserId) as string;
  const charter = useAppSelector(selectCharter) - 1;
  const page = useAppSelector(selectPage) - 1;

  const {
    data, isLoading, isFetching, isError, error,
  } = useGetMainWordsQuery({ charter, page });

  if (isLoading || isFetching) return <Spinner />;

  return (
    <div className="game-play">
      {
        data
        && data[index].word
      }
    </div>
  );
}

export default PlayAudioChallenge;
