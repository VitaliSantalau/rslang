/* eslint-disable no-unused-vars */
import './AnswerBtn.css';

interface IProps<T> {
  handleChangeIndex: (type: T) => void;
  type: T;
}

function NextBtn({
  handleChangeIndex, type,
}: IProps<'correct' | 'wrong'>) {
  const handleClick = () => {
    handleChangeIndex(type);
  };

  return (
    <button
      type="button"
      className={`answer-btn ${type}`}
      onClick={handleClick}
    >
      {type}
    </button>
  );
}

export default NextBtn;
