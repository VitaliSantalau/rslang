/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useCallback, useEffect, useState } from 'react';
import './Player.css';

interface IProps {
  audio: HTMLAudioElement;
  path: string[];
  size: string;
}

function Player({ audio, path, size }: IProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);

  const start = useCallback(() => {
    audio.src = path[index];
    audio.play();
  }, [audio, index, path]);

  const stop = useCallback(() => {
    audio.pause();
    audio.currentTime = 0;
    setIndex(0);
  }, [audio]);

  const handleClick = () => {
    if (audio.played) stop();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) start();
  }, [isPlaying, index, start]);

  useEffect(() => {
    const handleEndAudio = () => {
      if (index < path.length - 1) {
        setIndex((prev) => prev + 1);
      } else setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEndAudio);
    return () => {
      audio.removeEventListener('ended', handleEndAudio);
    };
  }, [audio, index, path.length]);

  return (
    <button
      type="button"
      className={`player ${size}`}
      onClick={handleClick}
    />
  );
}

export default Player;
