import {
  Dispatch, FormEvent, SetStateAction, useState,
} from 'react';
import Password from './components/Password';
import Email from './components/Email';
import Title from './components/Title';
import './form.css';
import SelectForm from './components/SelectForm';

interface IProps {
  setForm: Dispatch<SetStateAction<string>>;
}

function LogIn({ setForm }: IProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title
        title="Log in"
        text="Log in using e-mail and password provided during registration"
      />
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      <button type="submit" className="form-button">
        Log in
      </button>
      <SelectForm
        type="Register"
        text="Do not have a registration?"
        setForm={setForm}
      />
    </form>
  );
}

export default LogIn;
