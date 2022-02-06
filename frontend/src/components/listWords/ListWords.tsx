import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { fetchWords } from '../book/bookSlice';
import Word from '../word/Word';
import './ListWords.css';

function ListWords() {
  const dispatch = useAppDispatch();
  const currentListWords = useAppSelector((state) => state.book.listwords);
  const status = useAppSelector((state) => state.book.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchWords());
    }
  }, [dispatch, status]);

  const listWords = currentListWords
    .map((word) => <Word key={word.id} word={word} />);

  return (
    <ul className="listWords">
      {listWords}
    </ul>
  );
}

export default ListWords;
