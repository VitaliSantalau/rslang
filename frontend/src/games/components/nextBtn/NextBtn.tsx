/* eslint-disable no-unused-vars */
import { TState } from '../../modes/play/PlayAudioChallenge';
import './NextBtn.css';

interface IProps {
  handleChangeIndex: () => void;
  handleState: (current: TState) => void;
}

function NextBtn({ handleChangeIndex, handleState }: IProps) {
  const handleClick = () => {
    handleState('question');
    handleChangeIndex();
  };

  return (
    <button
      type="button"
      className="next-btn"
      onClick={handleClick}
    >
      next
    </button>
  );
}

export default NextBtn;
