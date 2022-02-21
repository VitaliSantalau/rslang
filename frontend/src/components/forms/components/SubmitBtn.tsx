import '../form.css';

interface IProps {
  title: string;
  disabled: boolean;
}

function SubmitBtn({ title, disabled }: IProps) {
  return (
    <button
      type="submit"
      className="form-button"
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default SubmitBtn;
