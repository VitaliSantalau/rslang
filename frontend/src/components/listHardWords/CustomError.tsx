import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import './ListHardWords.css';

interface IProps {
  error: FetchBaseQueryError;
}

function Error({ error }: IProps) {
  let content = 'something went wrong, please try again later';

  if (error.status === 'PARSING_ERROR') {
    if (error.originalStatus === 404) {
      content = 'nothing to show, it is empty here';
    }
  }

  return (
    <p className="listHardWords error">
      {content}
    </p>
  );
}

export default Error;
