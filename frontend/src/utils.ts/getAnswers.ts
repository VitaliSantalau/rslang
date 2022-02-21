/* eslint-disable no-underscore-dangle */
import { IUserWord, IWord } from '../interfaces/IWord';
import shuffle from './shuffle';

interface IProps {
  data: IWord[] | IUserWord[];
  wordId: string;
}

export default function getAnswers({ data, wordId }: IProps) {
  const arr = data
    .filter((el: IWord | IUserWord) => {
      if ('_id' in el) return el._id !== wordId;
      return el.id !== wordId;
    }) as IWord[] | IUserWord[];

  const word = data.filter((el: IWord | IUserWord) => {
    if ('_id' in el) return el._id === wordId;
    return el.id === wordId;
  }) as IWord[] | IUserWord[];

  return shuffle(
    shuffle(arr).slice(0, 4).concat(word),
  );
}
