/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import {
  MouseEvent, useEffect, useMemo, useState,
} from 'react';
import { useAppDispatch } from '../../../app/store';
import { IWord } from '../../../interfaces/IWord';
import getAnswers from '../../../utils.ts/getAnswers';
import { setCorrect, setError } from '../../gameSlice';
import { TState } from '../../modes/play/PlayAudioChallenge';
import './Answers.css';
import correct from '../../../assets/sounds/correct.mp3';
import wrong from '../../../assets/sounds/wrong.mp3';

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

  const trackCorrect = useMemo(() => new Audio(correct), []);
  const trackWrong = useMemo(() => new Audio(wrong), []);

  const checkAnswer = (target: HTMLButtonElement, wordId: string) => {
    const id = target.value;
    if (id === wordId) {
      target.classList.add('correct');

      trackCorrect.play();

      dispatch(setCorrect({
        id: wordId, word: wordName, translate: wordTranslate,
      }));
    } else {
      target.classList.add('error');

      trackWrong.play();

      dispatch(setError({
        id: wordId, word: wordName, translate: wordTranslate,
      }));
    }

    handleState('answer');
  };

  useEffect(() => {
    if (state === 'question') {
      document.querySelectorAll('.answer-btn')
        .forEach((el) => {
          el.classList.remove('correct', 'error');
        });

      setAnswers(
        getAnswers({ data, wordId }),
      );
    }
  }, [data, state, wordId]);

  const HandleClick = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    const target = e.target as HTMLButtonElement;
    checkAnswer(target, wordId);
  };

  useEffect(() => {
    const handleKeyPress = (
      e: globalThis.KeyboardEvent,
    ) => {
      const checkArr = Array.from({ length: 5 }, (_, i) => `${i + 1}`);
      if (!checkArr.includes(e.key)) return;

      const target = document.getElementById(e.key) as HTMLButtonElement;
      checkAnswer(target, wordId);
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [wordId]);

  return (
    <div className="answers-container">
      {
        answers
        && answers.map((el, i) => (
          <button
            key={el.id}
            id={`${i + 1}`}
            type="button"
            className="answer-btn "
            value={el.id}
            onClick={(e) => HandleClick(e)}
            disabled={state === 'answer'}
          >
            {i + 1}
            -
            {el.word}
          </button>
        ))
      }
    </div>
  );
}

export default Answers;
