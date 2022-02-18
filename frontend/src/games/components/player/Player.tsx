/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useEffect, useState } from 'react';
import { baseDataURL } from '../../../constants/constants';
import './Player.css';

interface IProps {
  audio: HTMLAudioElement;
  path: string;
}

function Player({ audio, path }: IProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const start = useCallback(() => {
    audio.src = `${baseDataURL}${path}`;
    audio.play();
  }, [audio, path]);

  const stop = useCallback(() => {
    audio.pause();
    audio.currentTime = 0;
  }, [audio]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      start();
    } else stop();
  }, [isPlaying, start, stop]);

  useEffect(() => {
    const handleEndAudio = () => {
      setIsPlaying(false);
    };
    audio.addEventListener('ended', handleEndAudio);
    return () => {
      audio.removeEventListener('ended', handleEndAudio);
    };
  }, [audio]);

  return (
    <button
      type="button"
      className="game-player"
      onClick={handleClick}
    />
  );
}

export default Player;
