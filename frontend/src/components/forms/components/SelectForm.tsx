import { Dispatch, SetStateAction } from 'react';
import '../form.css';

interface IProps {
  type: string;
  text: string;
  setForm: Dispatch<SetStateAction<string>>
}

function SelectForm({ type, text, setForm }: IProps) {
  return (
    <div className="form-select-container">
      <p className="form-select-text">
        {text}
      </p>
      <button
        type="button"
        className="form-select-btn"
        onClick={() => setForm(type)}
      >
        {type}
      </button>
    </div>
  );
}

export default SelectForm;
