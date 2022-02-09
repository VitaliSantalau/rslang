/* eslint-disable jsx-a11y/control-has-associated-label */
import useAudio from '../../hooks/useAudio';
import './Player.css';

interface IPropsPlayer {
  path: string;
  size: string;
}

function Player({ path, size }: IPropsPlayer) {
  const [switchAudio] = useAudio(path);

  return (
    <button
      type="button"
      className={`player ${size}`}
      onClick={switchAudio}
    />
  );
}

export default Player;
