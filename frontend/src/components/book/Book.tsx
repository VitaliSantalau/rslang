import ListCharters from '../listCharters/ListCharters';
import ListWords from '../listWords/ListWords';
import PageControls from '../pageControls/PageControls';
import './Book.css';

function Book() {
  return (
    <div className="book">
      <ListCharters />
      <PageControls />
      <ListWords />
    </div>
  );
}

export default Book;
