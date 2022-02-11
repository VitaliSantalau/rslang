import { stringify } from 'querystring';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/store';
import { selectToken, selectUserId } from '../../auth/authSlice';
import { useGetListUserWordsQuery } from '../book/bookApiSlice';
import { changeCharter } from '../book/bookSlice';
import './ListHardWords.css';

function HardWords() {
  const token = useSelector(selectToken);
  const userId = useSelector(selectUserId);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/auth');
      dispatch(changeCharter(1));
    }
  });

  if (!userId) throw new Error('userId is null');

  const { data } = useGetListUserWordsQuery({
    userId, filter: JSON.stringify({}),
  });

  //   const { data } = useGetListHardWordsQuery();

  //   if (!data) return <div>wait</div>;

  //   const listWords = data.map((word: IWord) => (
  //     <Word key={word.id} word={word} />
  //   ));

  return (
    <ul className="listWords">
      <div>hard words</div>
      {/* {listWords} */}
    </ul>
  );
}

export default HardWords;
