/* eslint-disable jsx-a11y/control-has-associated-label */
import { useAppDispatch, useAppSelector } from '../../app/store';
import { totalPages } from '../../constants/constants';
import { changePage, selectPage } from '../book/bookSlice';
import './PageControls.css';

function PageControls() {
  const currentPage = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  const handleClick = (page: number) => {
    dispatch(
      changePage(page),
    );
  };

  return (
    <div className="pageControls">
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
  );
}

export default PageControls;
