/* eslint-disable jsx-a11y/control-has-associated-label */
import '../Word.css';

interface IProps {
  handleStat: () => void;
  isWord: boolean;
}

function StatBtn({ handleStat, isWord }: IProps) {
  return (
    <button
      type="button"
      className={`btn-stat ${isWord ? 'to' : 'from'}`}
      onClick={handleStat}
    />
  );
}

export default StatBtn;
