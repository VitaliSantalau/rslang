import '../form.css';

interface IProps {
  title: string;
  text: string;
}

function Title({ title, text }: IProps) {
  return (
    <div className="form-titlte-container">
      <p className="form-title">
        {title}
      </p>
      <p className="form-title-text">
        {text}
      </p>
    </div>
  );
}

export default Title;
