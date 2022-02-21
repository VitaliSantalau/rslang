import { useAppSelector } from '../../../app/store';
import { selectSource } from '../../gameSlice';
import PlayAudioChallenge from './PlayAudioChallenge';
import PlayAudioChallengeBook from './PlayAudioChallengeBook';
import PlaySprint from './PlaySprint';
import PlaySprintBook from './PlaySprintBook';

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
          source === 'main' && <PlaySprint />
        ) || (
          source === 'book' && <PlaySprintBook />
        ))
      }
    </div>
  );
}

export default Play;
