/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch, useAppSelector } from '../../app/store';
import { changeCharter, selectCharter } from '../book/bookSlice';
import './ListCharters.css';

function listWordsStyle(charter: number): string {
  return ({
    1: 'firstCharter',
    2: 'secondCharter',
    3: 'thirdCharter',
    4: 'fourthCharter',
    5: 'fifthCharter',
    6: 'sixthCharter',
    7: 'seventhCharter',
  } as {[key: number]: string})[charter];
}

function ListCharters() {
  const currentCharter = useAppSelector(selectCharter);
  const dispatch = useAppDispatch();

  const handleClick = (charter: number) => {
    dispatch(
      changeCharter(charter),
    );
    localStorage.setItem('charter', `${charter}`);
    localStorage.setItem('page', '1');
  };

  const listCharters = Array.from({ length: 7 }, (_, i) => i + 1)
    .map((charter) => (
      <li
        key={charter}
        className={`charter ${charter === currentCharter ? 'selected' : ''}`}
        onClick={() => handleClick(charter)}
      >
        <p>{charter}</p>
        {charter === currentCharter ? '*' : ''}
        <p className="charter-mark" />
      </li>
    ));

  return (
    <ul className={`listCharters ${listWordsStyle(currentCharter)}`}>
      {listCharters}
    </ul>
  );
}

export default ListCharters;
