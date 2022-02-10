/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction, useState } from 'react';
import '../form.css';

interface IProps {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>
}

function Password({ password, setPassword }: IProps) {
  const [isSecret, setIsSecret] = useState(true);

  const handleSecret = () => {
    setIsSecret(!isSecret);
  };

  const buttonClassName = `btn-showPassword ${
    isSecret ? 'hide' : 'show'
  }`;

  return (
    <div className="form-field">
      <label htmlFor="password">
        Password
      </label>
      <div className="btn-container">
        <input
          type={isSecret ? 'password' : 'text'}
          id="password"
          name="password"
          value={password}
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className={buttonClassName}
          onClick={handleSecret}
        />
      </div>
    </div>
  );
}

export default Password;
