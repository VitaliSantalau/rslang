import { IWord } from '../../interfaces/IWord';
import './Word.css';

interface IPropsWord {
    word: IWord;
  }

function Word({ word }: IPropsWord) {
  return (
    <li>
      {word.word}
    </li>
  );
}

export default Word;
