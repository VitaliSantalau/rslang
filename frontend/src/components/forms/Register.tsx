import {
  Dispatch, FormEvent, SetStateAction, useState,
} from 'react';
import Password from './components/Password';
import Email from './components/Email';
import Title from './components/Title';
import './form.css';
import SelectForm from './components/SelectForm';
import Name from './components/Name';

interface IProps {
  setForm: Dispatch<SetStateAction<string>>;
}

function Register({ setForm }: IProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Title
        title="Register"
        text="register using name, e-mail and password"
      />
      <Name name={name} setName={setName} />
      <Email email={email} setEmail={setEmail} />
      <Password password={password} setPassword={setPassword} />
      <button type="submit" className="form-button">
        Register
      </button>
      <SelectForm
        type="Log in"
        text="Do you have a registration?"
        setForm={setForm}
      />
    </form>
  );
}

export default Register;
