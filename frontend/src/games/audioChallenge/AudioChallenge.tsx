import { useAppSelector } from '../../app/store';
import Start from '../modes/start/Start';
import { selectMode } from '../gameSlice';
import '../Game.css';

function AudioChallenge() {
  const mode = useAppSelector(selectMode);
  return (
    <main className="game">
      <div className="container">
        {
          mode === 'start'
          && (
            <Start
              title="AudioChallenge"
              text="text text text"
            />
          )
        }
        {
          mode === 'play'
          && (
            <p>play</p>
          )
        }
        {
          mode === 'result'
          && (
            <p>result</p>
          )
        }
      </div>
    </main>
  );
}

export default AudioChallenge;
