/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useEffect, useMemo } from 'react';
import { useAppDispatch } from '../../../app/store';
import { changeMode } from '../../gameSlice';
import './FinishBtn.css';
import endRound from '../../../assets/sounds/endRound.mp3';

function FinishBtn() {
  const dispatch = useAppDispatch();

  const track = useMemo(() => new Audio(endRound), []);

  const handleClick = useCallback(() => {
    dispatch(changeMode('result'));
    track.play();
  }, [dispatch, track]);

  useEffect(() => {
    const handleKeyPress = (
      e: globalThis.KeyboardEvent,
    ) => {
      if (e.key !== 'Enter') return;
      handleClick();
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleClick]);

  return (
    <button
      type="button"
      className="finish-btn"
      onClick={handleClick}
    />
  );
}

export default FinishBtn;
