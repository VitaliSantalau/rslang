/* eslint-disable no-unused-vars */
import { MouseEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../app/store';
import { IWord } from '../../../interfaces/IWord';
import getAnswers from '../../../utils.ts/getAnswers';
import { setCorrect, setError } from '../../gameSlice';
import { TState } from '../../modes/play/PlayAudioChallenge';
import './Answers.css';

interface IProps {
  word: IWord;
  data: IWord[];
  state: TState;
  handleState: (current: TState) => void;
}

function Answers({
  word, data, handleState, state,
}: IProps) {
  const [answers, setAnswers] = useState<IWord[] | undefined>();
  const dispatch = useAppDispatch();

  const {
    id: wordId, wordTranslate, word: wordName,
  } = word;

  const checkAnswer = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    const target = e.target as HTMLButtonElement;
    const id = target.value;
    if (id === wordId) {
      target.classList.add('correct');

      dispatch(setCorrect({
        id: wordId, word: wordName, translate: wordTranslate,
      }));
    } else {
      target.classList.add('error');

      dispatch(setError({
        id: wordId, word: wordName, translate: wordTranslate,
      }));
    }

    handleState('answer');
  };

  useEffect(() => {
    if (state === 'question') {
      setAnswers(
        getAnswers({ data, wordId }),
      );

      document.querySelectorAll('.answer-btn')
        .forEach((el) => {
          el.classList.remove('correct', 'error');
        });
    }
  }, [data, state, wordId]);

  return (
    <div className="answers-container">
      {
        answers
        && answers.map((el) => (
          <button
            key={el.id}
            type="button"
            className="answer-btn "
            value={el.id}
            onClick={(e) => checkAnswer(e)}
            disabled={state === 'answer'}
          >
            {el.word}
          </button>
        ))
      }
    </div>
  );
}

export default Answers;
