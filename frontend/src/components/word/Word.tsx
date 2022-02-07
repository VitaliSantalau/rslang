/* eslint-disable max-len */
import { IWord } from '../../interfaces/IWord';
import './Word.css';

interface IPropsWord {
    word: IWord;
  }

function Word({ word }: IPropsWord) {
  return (
    <li>
      <div>{word.audio}</div>
      <img src={`https://raw.githubusercontent.com/vitalisantalau/rs-lang-data/main/${word.image}`} alt="word" />
      {word.word}
    </li>
  );
}

export default Word;
