/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/media-has-caption */
import { baseDataURL } from '../../constants/constants';
import { IWord } from '../../interfaces/IWord';
import Player from '../player/Player';
import './Word.css';

interface IPropsWord {
  word: IWord;
}

function Word({ word }: IPropsWord) {
  const {
    image, word: wrd, transcription, wordTranslate,
    audio, textMeaning, textMeaningTranslate,
    audioMeaning, textExample, textExampleTranslate, audioExample,
  } = word;

  return (
    <li className="word-container">
      <img className="word-img" src={`${baseDataURL}${image}`} alt={wrd} />
      <div className="word-wrd">
        <div className="wrd-transl-container">
          <p>{wrd}</p>
          <p>{transcription}</p>
          <Player path={`${baseDataURL}${audio}`} size="big" />
        </div>
        <p className="word-transl">{wordTranslate}</p>
      </div>
      <div className="word-description">
        <div className="word-meaning">
          <div className="row">
            <p dangerouslySetInnerHTML={{ __html: textMeaning }} />
            <Player path={`${baseDataURL}${audioMeaning}`} size="small" />
          </div>
          <p>{textMeaningTranslate}</p>
        </div>
        <div className="word-example">
          <div className="row">
            <p dangerouslySetInnerHTML={{ __html: textExample }} />
            <Player path={`${baseDataURL}${audioExample}`} size="small" />
          </div>
          <p>{textExampleTranslate}</p>
        </div>
      </div>
    </li>
  );
}

export default Word;
