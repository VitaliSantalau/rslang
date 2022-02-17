import './NextBtn.css';

interface IProps {
  handleChangeIndex: () => void;
}

function NextBtn({ handleChangeIndex }: IProps) {
  return (
    <button
      type="button"
      className="next-btn"
      onClick={handleChangeIndex}
    >
      next
    </button>
  );
}

export default NextBtn;
