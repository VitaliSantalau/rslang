import './ListWords.css';
import Word from '../word/Word';
import { useGetListWordsQuery } from '../book/bookApiSlice';
import { useAppSelector } from '../../app/store';
import { selectCharter, selectPage } from '../book/bookSlice';
import { IWord } from '../../interfaces/IWord';

function ListWords() {
  const currentPage = useAppSelector(selectPage);
  const currentCharter = useAppSelector(selectCharter);

  const { data } = useGetListWordsQuery({
    charter: currentCharter - 1, page: currentPage - 1,
  });

  if (!data) return <div>wait</div>;

  const listWords = data.map((word: IWord) => (
    <Word key={word.id} word={word} />
  ));

  return (
    <ul className="listWords">
      {listWords}
    </ul>
  );
}

export default ListWords;
