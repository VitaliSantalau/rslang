/* eslint-disable jsx-a11y/control-has-associated-label */
import { baseDataURL } from '../../../constants/constants';
import useAudio from '../../../hooks/useAudio';
import './Player.css';

interface IProps {
  path: string;
}

function Player({ path }: IProps) {
  const [switchAudio] = useAudio(`${baseDataURL}${path}`);

  return (
    <button
      type="button"
      className="game-player"
      onClick={switchAudio}
    />
  );
}

export default Player;
