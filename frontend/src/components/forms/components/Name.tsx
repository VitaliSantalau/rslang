/* eslint-disable jsx-a11y/label-has-associated-control */
import { Dispatch, SetStateAction } from 'react';
import '../form.css';

interface IProps {
  name: string;
  setName: Dispatch<SetStateAction<string>>
}

function Name({ name, setName }: IProps) {
  return (
    <div className="form-field">
      <label htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Name;
