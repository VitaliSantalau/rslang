import './Intro.css';

interface IProps {
  title: string;
  text: string;
}

function Intro({ title, text }: IProps) {
  return (
    <div className="game-description">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Intro;
