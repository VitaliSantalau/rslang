/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch, useAppSelector } from '../../app/store';
import { changeCharter } from '../book/bookSlice';
import './ListCharters.css';

function ListCharters() {
  const currentCharter = useAppSelector((state) => state.book.charter);
  const dispatch = useAppDispatch();

  const handleClick = (charter: number) => {
    dispatch(
      changeCharter(charter),
    );
  };

  const listCharters = Array.from({ length: 7 }, (_, i) => i + 1)
    .map((charter) => (
      <li
        key={charter}
        className={`charter ${charter === +currentCharter ? 'selected' : ''}`}
        onClick={() => handleClick(charter)}
      >
        0
        {charter}
      </li>
    ));

  return (
    <ul className="listCharters">
      {listCharters}
    </ul>
  );
}

export default ListCharters;
