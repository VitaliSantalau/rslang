/* eslint-disable no-console */
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import './ListWords.css';

interface IProps {
  error: FetchBaseQueryError;
}

function Error({ error }: IProps) {
  const content = 'something went wrong, please try again later';
  console.log(error.data);

  return (
    <p className="listHardWords error">
      {content}
    </p>
  );
}

export default Error;
