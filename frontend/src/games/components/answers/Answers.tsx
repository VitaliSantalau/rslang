import { MouseEvent } from 'react';
import { IWord } from '../../../interfaces/IWord';
import shuffle from '../../../utils.ts/shuffle';
import './Answers.css';

interface IProps {
  wordId: string;
  data: IWord[];
}

function Answers({ wordId, data }: IProps) {
  const checkAnswer = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    const target = e.target as HTMLButtonElement;
    const id = target.value;
    if (id === wordId) {
      target.classList.add('correct');
    } else target.classList.add('error');
  };

  const newArr = [...data];
  const optArr = newArr
    .filter((el: IWord) => el.id !== wordId);
  const word = newArr.filter((el) => el.id === wordId);
  const answers = shuffle(shuffle(optArr).slice(0, 3).concat(word));
  return (
    <div className="answers-container">
      {
        answers.map((el) => (
          <button
            key={el.id}
            type="button"
            value={el.id}
            onClick={(e) => checkAnswer(e)}
          >
            {el.word}
          </button>
        ))
      }
    </div>
  );
}

export default Answers;
