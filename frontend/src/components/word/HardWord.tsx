import { baseDataURL } from '../../constants/constants';
import { IUserWord } from '../../interfaces/IWord';
import HardBtnHardWord from './components/HardBtnHardWord';
import WordDefinition from './components/WordDefinition';
import WordImage from './components/WordImage';
import WordText from './components/WordText';
import './Word.css';

interface IPropsWord {
  currentWord: IUserWord;
  audioObj: HTMLAudioElement;
}

function HardWord({ currentWord, audioObj }: IPropsWord) {
  const {
    _id, image, word, transcription, wordTranslate,
    audio, textMeaning, textMeaningTranslate,
    audioMeaning, textExample, textExampleTranslate, audioExample,
  } = currentWord;

  const audioPath = [audio, audioMeaning, audioExample]
    .map((el) => `${baseDataURL}${el}`);

  return (
    <li className="word-container">
      <WordImage path={image} word={word} />
      <WordDefinition
        word={word}
        transcription={transcription}
        translate={wordTranslate}
        audio={audioPath}
        audioObj={audioObj}
      />
      <div className="word-description">
        <WordText text={textMeaning} translate={textMeaningTranslate} />
        <WordText text={textExample} translate={textExampleTranslate} />
      </div>
      <div className="controls-container">
        <HardBtnHardWord wordId={_id} />
      </div>
    </li>
  );
}

export default HardWord;
