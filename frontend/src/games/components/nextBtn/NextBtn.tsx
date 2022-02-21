/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect } from 'react';
import { TState } from '../../modes/play/PlayAudioChallenge';
import './NextBtn.css';

interface IProps {
  handleChangeIndex: () => void;
  handleState: (current: TState) => void;
}

function NextBtn({ handleChangeIndex, handleState }: IProps) {
  const handleClick = useCallback(() => {
    handleState('question');
    handleChangeIndex();
  }, [handleChangeIndex, handleState]);

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
      className="next-btn"
      onClick={handleClick}
    />
  );
}

export default NextBtn;
