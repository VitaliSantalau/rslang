import './Hamburger.css';

type Props = {
  isOpen: boolean;
  handleClick: () => void;
}

function Hamburger({ isOpen, handleClick }: Props) {
  const buttonClassName = `hamburger ${
    isOpen ? 'open' : ''
  }`;

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={() => handleClick()}
    >
      <div className="hamburger-first" />
      <div className="hamburger-second" />
      <div className="hamburger-third" />
    </button>
  );
}

export default Hamburger;
