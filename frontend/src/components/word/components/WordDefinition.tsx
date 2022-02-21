import Player from '../../player/Player';
import '../Word.css';

interface IProps {
  word: string;
  transcription: string;
  translate: string;
  audio: string[];
  audioObj: HTMLAudioElement;
}

function WordDefinition({
  word, transcription, translate, audio, audioObj,
}: IProps) {
  return (
    <div className="word">
      <div className="word-transl-container">
        <p>{word}</p>
        <p>{transcription}</p>
        <Player
          path={audio}
          audio={audioObj}
          size="big"
        />
      </div>
      <p className="word-transl">{translate}</p>
    </div>
  );
}

export default WordDefinition;
