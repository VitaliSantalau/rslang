import './Hamburger.css';

type Props = {
  isOpen: boolean;
  handleClick: () => void;
}

function Hamburger({
  isOpen, handleClick,
}: Props) {
  const buttonClassName = `hamburger ${
    isOpen ? 'open' : ''
  }`;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => handleClick()}
    >
      <div />
      <div />
      <div />
    </button>
  );
}

export default Hamburger;
