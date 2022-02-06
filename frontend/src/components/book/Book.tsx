/* eslint-disable jsx-a11y/control-has-associated-label */
import ListCharters from '../listCharters/ListCharters';
import './Book.css';

function Book() {
  return (
    <div className="book">
      <ListCharters />
      <div className="pageControls">
        <button type="button" className="prev-arrow" />
        <p>10</p>
        <p>/</p>
        <p>20</p>
        <button type="button" className="next-arrow" />
      </div>
      <ul className="listWords">
        <li>word</li>
        <li>word</li>
        <li>word</li>
        <li>word</li>
        <li>word</li>
        <li>word</li>
      </ul>
    </div>
  );
}

export default Book;
