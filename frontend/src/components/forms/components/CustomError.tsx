import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import '../form.css';

interface IProps {
  error: FetchBaseQueryError;
}

interface IError {
  error: {
    errors: {path: string, message: string}[];
  };
}

function Error({ error }: IProps) {
  if (error.status === 422) {
    const { errors } = (error.data as IError).error;
    return (
      <div className="form-alert error">
        {
          errors.map((item: {path: string, message: string}) => (
            <p key={item.path}>
              {item.message}
            </p>
          ))
        }
      </div>
    );
  }

  if (error.status === 'PARSING_ERROR') {
    return (
      <div className="form-alert error">
        {error.data}
      </div>
    );
  }

  return (
    <div className="form-alert error" />
  );
}

export default Error;
