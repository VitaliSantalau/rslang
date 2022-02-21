import { useAppSelector } from '../../../app/store';
import { selectUserId } from '../../../auth/authSlice';
import { useDeleteWordMutation } from '../../book/bookApiSlice';
import '../Word.css';

interface IProps {
  wordId: string
}

function HardBtnHardWord({ wordId }: IProps) {
  const userId = useAppSelector(selectUserId) as string;

  const [deleteWord] = useDeleteWordMutation();

  const handleClick = () => {
    deleteWord({ userId, wordId });
  };

  return (
    <button
      type="button"
      className="btn-hard"
      onClick={handleClick}
    >
      delete
    </button>
  );
}

export default HardBtnHardWord;
