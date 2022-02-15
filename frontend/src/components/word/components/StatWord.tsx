/* eslint-disable react/no-danger */
import '../Word.css';
import StatBtn from './StatBtn';

interface IProps {
  handleStat: () => void;
  isWord: boolean;
}

function StatWord({ handleStat, isWord }: IProps) {
  return (
    <p>
      statistic of word
      <StatBtn isWord={isWord} handleStat={handleStat} />
    </p>
  );
}

export default StatWord;
