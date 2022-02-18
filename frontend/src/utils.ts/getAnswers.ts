import { IUserWord, IWord } from '../interfaces/IWord';
import shuffle from './shuffle';

interface IProps {
  data: IWord[] | IUserWord[];
  wordId: string;
}

export default function getAnswers({ data, wordId }: IProps) {
  const arr = data
    .filter((el: IWord) => el.id !== wordId);

  const word = data.filter((el) => el.id === wordId);

  return shuffle(
    shuffle(arr).slice(0, 3).concat(word),
  );
}
