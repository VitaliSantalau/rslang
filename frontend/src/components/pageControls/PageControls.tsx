/* eslint-disable jsx-a11y/control-has-associated-label */
import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectToken } from '../../auth/authSlice';
import { totalPages } from '../../constants/constants';
import { changePage, selectPage } from '../book/bookSlice';
import GameBtn from '../controls/gameBtn/GameBtn';
import './PageControls.css';

function PageControls() {
  const currentPage = useAppSelector(selectPage);
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  const handleClick = (page: number) => {
    dispatch(
      changePage(page),
    );
    localStorage.setItem('page', `${page}`);
  };

  return (
    <div className="pageControls">
      <div className="pageControls-container">
        <button
          type="button"
          className="prev-arrow"
          disabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
        />
        <p>{currentPage}</p>
        <p>/</p>
        <p>{totalPages}</p>
        <button
          type="button"
          className="next-arrow"
          disabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
        />
      </div>
      {
        token
        && (
          <div className="gameBtn-container">
            <GameBtn type="audiochallenge" />
            <GameBtn type="sprint" />
          </div>
        )
      }
    </div>
  );
}

export default PageControls;
