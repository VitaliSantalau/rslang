import { useAppSelector } from '../../app/store';
import './ListCharters.css';

function ListCharters() {
  const currentCharter = useAppSelector((state) => state.book.charter);
  const charterClassName = (charter) => `
    charter ${String(charter) === currentCharter ?  }
  `

  const listCharters = Array.from({ length: 7 }, (_, i) => i + 1)
    .map((charter) => (
      <li
        className="charter"
        key={charter}
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
