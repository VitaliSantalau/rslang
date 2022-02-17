import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../app/store';
import { defaultLevel, qntLevels } from '../../../constants/constants';
import { setLevel } from '../../gameSlice';
import './Levels.css';

function Levels() {
  const [state, setState] = useState(defaultLevel);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setState(+target.value);
  };

  useEffect(() => {
    dispatch(setLevel(state));
  }, [dispatch, state]);

  const levels = Array.from({ length: qntLevels }, (_, i) => i + 1)
    .map((el: number) => (
      <label htmlFor={`radio${el}`} key={el}>
        <input
          id={`radio${el}`}
          type="radio"
          checked={el === state}
          name="level"
          value={el}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
      </label>
    ));

  return (
    <div className="">
      {levels}
    </div>
  );
}

export default Levels;
