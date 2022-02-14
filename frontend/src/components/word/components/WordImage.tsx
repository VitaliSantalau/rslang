import { baseDataURL } from '../../../constants/constants';
import '../Word.css';

interface IProps {
  path: string;
  word: string;
}

function WordImage({ path, word }: IProps) {
  return (
    <img className="word-img" src={`${baseDataURL}${path}`} alt={word} />
  );
}

export default WordImage;
