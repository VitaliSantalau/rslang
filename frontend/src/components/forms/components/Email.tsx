/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction } from 'react';
import '../form.css';

interface IProps {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>
}

function Email({ email, setEmail }: IProps) {
  return (
    <div className="form-field">
      <label htmlFor="email">
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        placeholder="Your working email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

export default Email;
