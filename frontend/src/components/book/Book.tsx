import { useAppSelector } from '../../app/store';
import { hardWordsCharter } from '../../constants/constants';
import ListCharters from '../listCharters/ListCharters';
import HardWords from '../listHardWords/ListHardWords';
import ListWords from '../listWords/ListWords';
import PageControls from '../pageControls/PageControls';
import './Book.css';
import { selectCharter } from './bookSlice';

function Book() {
  const currentCharter = useAppSelector(selectCharter);

  return (
    <div className="book">
      <ListCharters />
      {
        (currentCharter !== hardWordsCharter)
         && <PageControls />
      }
      {
        (currentCharter !== hardWordsCharter)
          ? <ListWords />
          : <HardWords />
      }
    </div>
  );
}

export default Book;
