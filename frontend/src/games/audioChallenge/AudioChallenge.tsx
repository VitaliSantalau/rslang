import { useAppSelector } from '../../app/store';
import Start from '../modes/start/Start';
import { selectMode } from '../gameSlice';
import '../Game.css';
import Footer from '../../components/footer/Footer';
import Play from '../modes/play/Play';

function AudioChallenge() {
  const mode = useAppSelector(selectMode);

  return (
    <>
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
            && <Play game="audioChallenge" />
          }
          {
            mode === 'result'
            && (
              <p>result</p>
            )
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AudioChallenge;
