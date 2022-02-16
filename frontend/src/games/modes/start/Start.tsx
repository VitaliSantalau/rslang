import Levels from '../../components/levels/Levels';
import StartBtn from '../../components/startBtn/StartBtn';
import './Start.css';

interface IProps {
  title: string
  text: string;
}

function Start({ title, text }: IProps) {
  return (
    <div className="game-start">
      {title}
      {text}
      <Levels />
      <StartBtn />
    </div>
  );
}

export default Start;
