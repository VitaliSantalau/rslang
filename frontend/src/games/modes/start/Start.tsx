import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/store';
import Intro from '../../components/intro/Intro';
import Levels from '../../components/levels/Levels';
import StartBtn from '../../components/startBtn/StartBtn';
import { setSource } from '../../gameSlice';
import './Start.css';

interface IProps {
  title: string;
  text: string;
}

function Start({ title, text }: IProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSource('main'));
  }, [dispatch]);

  return (
    <div className="game-start">
      <Intro
        title={title}
        text={text}
      />
      <div className="levels-container">
        <p>Chose level</p>
        <Levels />
      </div>
      <StartBtn />
    </div>
  );
}

export default Start;
