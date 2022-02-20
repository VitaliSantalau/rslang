import { useAppSelector } from '../../app/store';
import Start from '../modes/start/Start';
import { selectMode } from '../gameSlice';
import '../Game.css';
import Footer from '../../components/footer/Footer';
import Play from '../modes/play/Play';
import ExitBtn from '../components/exitBtn.tsx/ExitBtn';
import Result from '../modes/result/Result';

function Sprint() {
  const mode = useAppSelector(selectMode);

  return (
    <>
      <main className="game sprint">
        <div className="container">
          {
            mode !== 'result'
            && <ExitBtn />
          }
          {
            mode === 'start'
            && (
              <Start
                title="Sprint"
                text="This is a mini-game to test the learned words"
              />
            )
          }
          {
            mode === 'play'
            && <Play game="sprint" />
          }
          {
            mode === 'result'
            && (
              <Result game="sprint" />
            )
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Sprint;
