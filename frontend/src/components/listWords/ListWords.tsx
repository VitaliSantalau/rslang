// import { useEffect } from 'react';
import { useGetListWordsQuery } from '../../app/apiSlice';
import Word from '../word/Word';
import './ListWords.css';

function ListWords() {
  // const dispatch = useAppDispatch();
  // const currentListWords = useAppSelector((state) => state.book.listwords);
  // const status = useAppSelector((state) => state.book.status);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchWords());
  //   }
  // }, [dispatch, status]);

  const { data } = useGetListWordsQuery({ charter: 1, page: 1 });

  if (!data) return <div>wait</div>;

  const listWords = data.map((word: any) => <Word key={word.id} word={word} />);

  return (
    <ul className="listWords">
      {listWords}
    </ul>
  );
}

export default ListWords;
