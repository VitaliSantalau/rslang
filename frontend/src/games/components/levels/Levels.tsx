import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../app/store';
import {
  defaultLevel, qntLevels, totalPages,
} from '../../../constants/constants';
import getRandomNumber from '../../../utils.ts/getRandomNumber';
import { setLevel } from '../../gameSlice';

function Levels() {
  const [state, setState] = useState(defaultLevel);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setState(+target.value);
  };

  const page = getRandomNumber(1, totalPages - 1);

  useEffect(() => {
    dispatch(setLevel({ charter: state, page }));
  }, [dispatch, page, state]);

  const levels = Array.from({ length: qntLevels }, (_, i) => i + 1)
    .map((el: number) => (
      <label
        className="level"
        htmlFor={`radio${el}`}
        key={el}
      >
        <input
          id={`radio${el}`}
          type="radio"
          checked={el === state}
          name="level"
          value={el}
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => handleChange(e)
          }
        />
        <div className="level-mark">
          {el}
        </div>
      </label>
    ));

  return (
    <div className="levels">
      {levels}
    </div>
  );
}

export default Levels;
