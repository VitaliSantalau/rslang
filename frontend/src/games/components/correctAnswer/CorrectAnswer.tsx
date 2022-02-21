import { baseDataURL } from '../../../constants/constants';
import { IUserWord, IWord } from '../../../interfaces/IWord';
import './CorrectAnswer.css';

interface IProps {
  data: IWord | IUserWord;
}

function CorrectAnswer({ data }: IProps) {
  const { image, word, wordTranslate } = data;
  return (
    <div className="correctAnswer-container">
      <img
        className="answer-img"
        src={`${baseDataURL}${image}`}
        alt={word}
      />
      <p className="answer-word">
        {word}
      </p>
      <p className="answer-transl">
        {wordTranslate}
      </p>
    </div>
  );
}

export default CorrectAnswer;
