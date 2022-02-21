import {
  Dispatch, SetStateAction, useCallback, useEffect, useState,
} from 'react';
import './Timer.css';

interface IProps {
  qntSec: number;
  setIsFinish: Dispatch<SetStateAction<boolean>>
}

function Timer({ qntSec, setIsFinish }: IProps) {
  const initStart = Date.now() + (qntSec * 1000);

  const [start] = useState(initStart);
  const [sec, setSec] = useState(qntSec);

  const getDiff = useCallback(() => (
    start - Date.now()
  ), [start]);

  useEffect(() => {
    if (sec > 0) {
      setTimeout(() => setSec(Math.floor(getDiff() / 1000)), 1000);
    } else {
      setIsFinish(true);
    }
  }, [getDiff, sec, setIsFinish]);

  return (
    <div className="timer">
      {sec}
    </div>
  );
}

export default Timer;
