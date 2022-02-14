/* eslint-disable react/no-danger */
import '../Word.css';
import StatBtn from './StatBtn';

interface IProps {
  id: string;
  handleStat: () => void;
}

function StatWord({ id, handleStat }: IProps) {
  return (
    <p>
      statistic of word with id
      {id}
      <StatBtn handleStat={handleStat} />
    </p>
  );
}

export default StatWord;
