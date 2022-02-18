import { useAppSelector } from '../../../app/store';
import { selectSource } from '../../gameSlice';
import PlayAudioChallenge from './PlayAudioChallenge';
import PlayAudioChallengeBook from './PlayAudioChallengeBook';
import Sprint from './Sprint';
import SprintBook from './SprintBook';

interface IProps {
  game: 'audioChallenge' | 'sprint';
}

function Play({ game }: IProps) {
  const source = useAppSelector(selectSource);

  return (
    <div className="game-play">
      {
        game === 'audioChallenge'
        && ((
          source === 'main' && <PlayAudioChallenge />
        ) || (
          source === 'book' && <PlayAudioChallengeBook />
        ))
      }
      {
        game === 'sprint'
        && ((
          source === 'main' && <Sprint />
        ) || (
          source === 'book' && <SprintBook />
        ))
      }
    </div>
  );
}

export default Play;
