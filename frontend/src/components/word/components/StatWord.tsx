/* eslint-disable react/no-danger */
import '../Word.css';
import StatBtn from './StatBtn';

interface IProps {
  handleStat: () => void;
  isWord: boolean;
}

function StatWord({ handleStat, isWord }: IProps) {
  return (
    <>
      <div className="statWord">
        <p className="statWord-title">Study progress</p>
        <div className="statWord-game">
          <p className="statWord-game-title">Audiochallenge</p>
          <div className="statWord-game-result">
            <p className="statWord-game-correct">0</p>
            <p>/</p>
            <p className="statWord-game-wrong">0</p>
          </div>
        </div>
        <div className="statWord-game">
          <p className="statWord-game-title">Sprint</p>
          <div className="statWord-game-result">
            <p className="statWord-game-correct">0</p>
            <p>/</p>
            <p className="statWord-game-wrong">0</p>
          </div>
        </div>
      </div>
      <StatBtn isWord={isWord} handleStat={handleStat} />
    </>
  );
}

export default StatWord;
