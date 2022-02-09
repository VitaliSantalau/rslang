import { useEffect, useState } from 'react';

const useAudio = (path: string) => {
  const [audio] = useState(new Audio(path));
  const [isPlaying, setIsPlaying] = useState(false);

  const switchAudio = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else audio.pause();
  }, [audio, isPlaying]);

  useEffect(() => {
    const handleEndAudio = () => {
      setIsPlaying(false);
    };
    audio.addEventListener('ended', handleEndAudio);
    return () => {
      audio.removeEventListener('ended', handleEndAudio);
    };
  }, [audio]);

  return [switchAudio];
};

export default useAudio;
