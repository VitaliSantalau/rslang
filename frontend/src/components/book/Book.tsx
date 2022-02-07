import { useAppSelector } from '../../app/store';
import ListCharters from '../listCharters/ListCharters';
import ListWords from '../listWords/ListWords';
import PageControls from '../pageControls/PageControls';
import './Book.css';
import { selectCharter } from './bookSlice';

function Book() {
  const currentCharter = useAppSelector(selectCharter);

  return (
    <div className="book">
      <ListCharters />
      <PageControls />
      {
        currentCharter !== 7
          ? <ListWords />
          : <div>hard words</div>
      }
    </div>
  );
}

export default Book;
