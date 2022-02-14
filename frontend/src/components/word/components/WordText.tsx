/* eslint-disable react/no-danger */
import '../Word.css';

interface IProps {
  text: string;
  translate: string;
}

function WordText({ text, translate }: IProps) {
  return (
    <div className="word-text">
      <div className="row">
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <p>{translate}</p>
    </div>
  );
}

export default WordText;
