/* eslint-disable jsx-a11y/media-has-caption */
import { useState } from 'react';
import { useAppSelector } from '../../app/store';
import { selectToken } from '../../auth/authSlice';
import { baseDataURL } from '../../constants/constants';
import { IWord } from '../../interfaces/IWord';
import HardBtn from './components/HardBtn';
import LearnBtn from './components/LearnBtn';
import StatBtn from './components/StatBtn';
import StatWord from './components/StatWord';
import WordDefinition from './components/WordDefinition';
import WordImage from './components/WordImage';
import WordText from './components/WordText';
import './Word.css';

interface IPropsWord {
  currentWord: IWord;
  audioObj: HTMLAudioElement;
  mode: 'neut'|'hard'|'learned';
}

function Word({ currentWord, audioObj, mode }: IPropsWord) {
  const token = useAppSelector(selectToken);

  const [isWord, setIsWord] = useState(true);

  const {
    id, image, word, transcription, wordTranslate,
    audio, textMeaning, textMeaningTranslate,
    audioMeaning, textExample, textExampleTranslate, audioExample,
  } = currentWord;

  const audioPath = [audio, audioMeaning, audioExample]
    .map((el) => `${baseDataURL}${el}`);

  const handleStat = () => {
    setIsWord(!isWord);
  };

  return (
    <li className={`word-container ${token ? mode : ''}`}>
      {
        isWord
        && (
          <>
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
            {
              token
              && (
                <div className="controls-container">
                  <HardBtn mode={mode} wordId={id} />
                  <LearnBtn mode={mode} wordId={id} />
                  <StatBtn handleStat={handleStat} isWord={isWord} />
                </div>
              )
            }
          </>
        )
      }
      {
        !isWord
        && <StatWord isWord={isWord} handleStat={handleStat} />
      }
    </li>
  );
}

export default Word;
