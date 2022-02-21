import { IUserWord, IWord } from '../interfaces/IWord';
import getRandomNumber from './getRandomNumber';

interface IProps {
  data: IWord[] | IUserWord[];
  word: IWord | IUserWord;
}

export default function getAnswer({ data, word }: IProps) {
  const index = getRandomNumber(0, data.length - 1);
  const answer = data[index];
  return [
    word, answer,
  ][getRandomNumber(0, 1)];
}
