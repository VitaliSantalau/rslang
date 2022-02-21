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
    let content = '';
    if (error.originalStatus === 403) {
      content = `${error.data}. Wrong password`;
    }
    if (error.originalStatus === 404) {
      content = 'Could not find an user with typed e-mail';
    }
    return (
      <div className="form-alert error">
        {content}
      </div>
    );
  }

  return (
    <div className="form-alert error" />
  );
}

export default Error;
